import objetoPalabra from './Palabra.js';
    
    var cantidadLetrasClickeadas = 0;
    const palabra = new objetoPalabra();
    var palabraSeleccionada;
    var cantidadLetrasPalabraSeleccionada = 0;
    var quiereVolverJugar = false;

    function constructor(palabra,cantidadLetras){
        palabraSeleccionada = palabra;
        alert(palabraSeleccionada);
        cantidadLetrasPalabraSeleccionada = cantidadLetras;
        alert(cantidadLetrasPalabraSeleccionada);
    }

    function seguirJugando(boton){
        
        let mensaje = "";
         cantidadLetrasClickeadas+=1; 
         if( puedeSeguirJugando()){
             boton.setAttribute("class", "btn btn-info disabled");
             mostarLetraEnCuadroTexto(boton);
             
         }  
         if(gano() || perdio()){
             if(gano()){
                 mensaje = "Great Job"
             }else{
                 if(perdio()){
                     mensaje = "Sorry Good Luck Next Time"
                 }
             } 
            setTimeout(quiereContinuarJugando, 1000,mensaje);
         }
 
         //setTimeout(determinarGanoPerdio,500);      
    }
    
 
     function gano(){
         return quedanTurnos() && adivinoLaPalabra();
     }
 
     function perdio(){
         return esUltimoTurno() && !adivinoLaPalabra();
     }
 
     function quiereContinuarJugando(mensaje){
         let quiereJugar = "\nDo you want to play again? "
         if(confirm(mensaje+ quiereJugar)){
             reactivarBotonesAbecedario();
             cantidadLetrasClickeadas = 0;
             quiereVolverJugar = true;
         }else{
             alert("Thanks");
         }
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
         return cantidadLetrasClickeadas<=cantidadLetrasPalabraSeleccionada;
     }
 
     function adivinoLaPalabra(){
         return  obtenerCantidadEntradasVacias() == 0;
     }
 
     function esUltimoTurno(){
         return cantidadLetrasClickeadas==cantidadLetrasPalabraSeleccionada;
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

export default  {seguirJugando, constructor}
