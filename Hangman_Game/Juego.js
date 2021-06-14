  const util = require('util');

   const VECTOROCUPACIONES = ["baker", "butcher", "salesman", "saleswoman", "cashier", 
    "hair dresser", "mechanic", "chef", "farmer", "waiter", "waitress"];
    
    var palabraSeleccionada = "";
    var cantidadLetras = 0;
    var vectorPalabrasUsadas = [];
    var longitudVector =  VECTOROCUPACIONES.length;
    var cantidadLetrasClickeadas = 0;
    var quiereVolverJugar = false;
    vectorPalabrasUsadas.fill(false);

    function constructor(){
        vectorPalabrasUsadas.length = longitudVector;
        palabraSeleccionada = elegirPalabra();
        cantidadLetras = palabraSeleccionada.length;
        alert(palabraSeleccionada);
     }
     
    function llenarVectorPalabrasUsadas(){
        //vectorPalabrasUsadas.fill(false);
        for(let i =0; i < vectorPalabrasUsadas.length; ++i ){
             vectorPalabrasUsadas[i] = false;
             alert(vector[i]);
         }
    }
    function elegirPalabra(){
         let posicionPalabra = generarNumeroAleatorio(); 
         let contador = 0;
         let palabraElegida = "";
         alert("Antes del while");
         alert("La posicion elegida es "+ posicionPalabra);
         console.log("posicion de la palabr "+posicionPalabra);
         while(vectorPalabrasUsadas[posicionPalabra]!=false && contador < longitudVector){
            alert(vectorPalabrasUsadas[posicionPalabra]); 
            posicionPalabra = generarNumeroAleatorio();
             ++contador;
             alert("Estoy en el while de elegir palabra");
         }
         if(contador < longitudVector){
             alert("Estoy en el if de elegir palabra");
             palabraElegida = VECTOROCUPACIONES[posicionPalabra];
             vectorPalabrasUsadas[posicionPalabra] = true;
             contador = 0;
             console.log("posicion de la palabr "+posicionPalabra);
             
         }else{
             window.alert("All the words was used");
             vectorPalabrasUsadas.fill(false);
             alert("Estoy en el else de elegir palabra");
         }
         for(let i =0; i < vectorPalabrasUsadas.length; ++i ){
            alert("Vector Palabras Usadas "+ vectorPalabrasUsadas[i]);
         }
         return palabraElegida;
     }
 
    function generarNumeroAleatorio(){
         let aleatorio= Math.floor(Math.random()*longitudVector);
         return aleatorio;
     }
 
 
    function getCantidadLetras(){
         return cantidadLetras;
     }

    async function seguirJugando(boton){
        
        let mensaje = "";
         cantidadLetrasClickeadas+=1; 
         if( puedeSeguirJugando()){
             boton.setAttribute("class", "btn btn-info disabled");
             mostarLetraEnCuadroTexto(boton);
             
         }  
         
        const sleep = time => new Promise(resolve =>setTimeout(resolve,time))
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
            console.log("antes de sleep");
           await sleep(400);
           console.log("despues de sleep");
           quiereContinuarJugando(mensaje);
          
    }
    
    async function revisarFinalJuego(){
        
        } 
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

     function setCantidadLetrasClickeadas(cantidadLetras){
        cantidadLetrasClickeadas = cantidadLetras
     }

     function setCantidadLetras(cantidad){
        cantidadLetras = cantidad;
     }

export default  {llenarVectorPalabrasUsadas,seguirJugando, constructor, getQuiereVolverJugar, getCantidadLetras, puedeSeguirJugando, setCantidadLetrasClickeadas, setCantidadLetras};
