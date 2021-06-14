const { wait } = require('./Utils/index')
const VECTOR_OCUPACIONES = ["baker", "butcher", "salesman", "saleswoman", "cashier", 
"hair dresser", "mechanic", "chef", "farmer", "waiter", "waitress"];
    
     
    function seguirJugando(boton){
        
        let mensaje = "";
         cantidadLetrasClickeadas+=1; 
         if( puedeSeguirJugando()){
             boton.setAttribute("class", "btn btn-info disabled");
             mostarLetraEnCuadroTexto(boton);
             
         }  
         
        
        if(gano() || perdio()){
            if(gano()){
                console.log("gano")
                mensaje = "Great Job"
            }else{
                if(perdio()){
                    console.log("perdio")
                    mensaje = "Sorry Good Luck Next Time"
                }
            } 
           wait(400);
           quiereContinuarJugando(mensaje);
          
    }

    function gano(){
        return quedanTurnos() && adivinoLaPalabra();
    }
 
     function perdio(){
         return esUltimoTurno() && !adivinoLaPalabra();
     }
 
    function quiereContinuarJugando(mensaje){
        let quiereJugar = "\nDo you want to play again? "
        quiereVolverJugar = confirm(mensaje+ quiereJugar);
         if(quiereVolverJugar){
             alert("quiere volver a jugar" + quiereVolverJugar);
             reactivarBotonesAbecedario();
             //poner las clickeadas en cero
             eliminarCajasTexto();
         }else{
             alert("Thanks");
             quiereVolverJugar = false;
         }
     }

     function getQuiereVolverJugar(){
        return quiereVolverJugar;
     }

     function reactivarBotonesAbecedario(){
         var vectorBotonesDesactivados = document.getElementsByClassName("btn btn-info disabled");
         let cantidadBotonesDesactivados = vectorBotonesDesactivados.length
         let contadorBotonesReactivados = 0;
         let indice =0;
         while(contadorBotonesReactivados < cantidadBotonesDesactivados) {
             vectorBotonesDesactivados[indice].setAttribute("class", "btn btn-info");
             ++contadorBotonesReactivados;
        }
     }
     function mostarLetraEnCuadroTexto(boton){
         
         let letraBuscada = boton.innerText;
         let posicion = buscarPosicionLetra(letraBuscada,0);
         while(posicion!==-1){
             let cuadroTexto = document.getElementById(posicion.toString());
             cuadroTexto.value = letraBuscada;
             let siguientePosicion= posicion + 1;
             posicion = buscarPosicionLetra(letraBuscada,siguientePosicion);
         }
     }
     
     function buscarPosicionLetra(letraBuscada, posicionInicio) {
         let posicion = palabraSeleccionada.indexOf(letraBuscada, posicionInicio);
         return posicion;
     }
 
     function puedeSeguirJugando(){
         return quedanTurnos() && !adivinoLaPalabra(); 
     }
 
     function quedanTurnos(){
         return cantidadLetrasClickeadas<=cantidadLetras;
     }
 
     function adivinoLaPalabra(){
         return  obtenerCantidadEntradasVacias() == 0;
     }
 
     function esUltimoTurno(){
         return cantidadLetrasClickeadas==cantidadLetras;
     }
     
     function obtenerCantidadEntradasVacias(){
         let todasEntradas = document.getElementsByTagName("input");
         let cantidadEntradasVacias = 0;
         for(let entrada=0;entrada<todasEntradas.length;++entrada)
             if(todasEntradas[entrada].value == ""){
                 cantidadEntradasVacias+=1;
             }
         return cantidadEntradasVacias;
     }

     function eliminarCajasTexto(){
        let padre = document.getElementById("input");
        for(let numeroCaja =0; numeroCaja< cantidadLetras; ++numeroCaja){
            let hijo = document.getElementsByTagName("input")[0]
            padre.removeChild(hijo);
            
        }
     }

module.exports = 
{
    seguirJugando, 
    getQuiereVolverJugar,
    puedeSeguirJugando
}
