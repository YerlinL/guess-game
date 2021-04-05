import elementoHTML from './ElementoHTMLBuilder.js';
import objetoPalabra from './Palabra.js';




    const palabra = new objetoPalabra();
    var palabraSeleccionada;
    var cantidadLetrasClickeadas=0;
    let cantidadLetrasPalabraSeleccionada = 0;
    
    function constructor(){
        generarAbecedario();
        jugar();
        
        
    }

    function jugar(){
       palabraSeleccionada = palabra.getPalabra();
       cantidadLetrasPalabraSeleccionada = palabra.getCantidadLetras();
       crearFormulario(cantidadLetrasPalabraSeleccionada);
       
   }


    function crearFormulario(cantidadLetras){ 
        let formulario = document.getElementById("input");
        const altura = '50px';
        const ancho = '50px';
        const colorFondo = 'snow';
    
        for(let cantidadCuadrosTexto= 0; cantidadCuadrosTexto < cantidadLetrasPalabraSeleccionada; ++cantidadCuadrosTexto){
    
            let elementoNuevo = document.createElement('input');
            const elemento = new elementoHTML(elementoNuevo)
                            .establecerAltura(altura)
                            .establecerAncho(ancho)
                            .establecerColorFondo(colorFondo)
                            .establecerID(cantidadCuadrosTexto.toString());
            let input = elemento.obtenerElemento();
           
            formulario.appendChild(input);
           
        }      
    
    }
    
    function generarAbecedario(){
        const altura = '50px';
        const ancho = '50px';
        const colorFondo = '#4FC3F7';
        const colorBorde = 'black';
        let a = 97;
        let z = 122;
        let m = 110;
        let formulario = document.getElementById("abecedario");
    
        for (let letra = a; letra <= z; ++letra){
         
            let espacio = document.createTextNode("\u00a0");
            let elementoNuevo = document.createElement('button');
            let letraCreada = String.fromCharCode(letra);
            const boton = new elementoHTML(elementoNuevo)
                            .establecerID(letraCreada)
                            .establecerTipo("button")
                            .establecerClase("btn btn-info")
                            .establecerAltura(altura)
                            .establecerAncho(ancho)
                            .establecerColorFondo(colorFondo)
                            .establecerColorBorde(colorBorde);
            const botonNuevo  = boton.obtenerElemento(); 
            botonNuevo.innerText= letraCreada;
            botonNuevo.onclick = function() {seguirJugando(botonNuevo)};
            formulario.appendChild(botonNuevo);
            formulario.appendChild(espacio);
            
        }
     
    }
   function seguirJugando(boton){
    cantidadLetrasClickeadas+=1; 
    if( puedeSeguirJugando()){
        boton.setAttribute("class", "btn btn-info disabled");
        mostarLetraEnCuadroTexto(boton);
        
    }  
    if(cantidadLetrasClickeadas==cantidadLetrasPalabraSeleccionada){
        document.getElementById("ModalJuego").style.display = "block"
        document.getElementById("ModalJuego").className += "show"
    }  
   }
    // function puedeSeguirJugando(boton){
    //      seguirJugando(boton);
    //      gano();
    //      perdio();
       
    // }

    function gano(){
        if(cantidadLetrasClickeadas<=cantidadLetrasPalabraSeleccionada && adivinoLaPalabra()){
            if(confirm("¡You won Great Job! Do you want to play again")){
                reactivarBotonesAbecedario();
                cantidadLetrasClickeadas = 0;
                jugar();
            }else{
                alert("Thank you")
            }
        }
    }

    function perdio(){
        if(cantidadLetrasClickeadas==cantidadLetrasPalabraSeleccionada && !adivinoLaPalabra()){
            if(confirm("¡Sorry you lost! Do you want to play again")){
                reactivarBotonesAbecedario();
                cantidadLetrasClickeadas = 0;
                jugar();
            }else{
                alert("Thank you")
            }
        }
    }

    function reactivarBotonesAbecedario(){
        var vectorBotonesDesactivados = document.getElementsByClassName("btn btn-info disabled");
        let cantidadBotonesDesactivados = vectorBotonesDesactivados.length
        let contadorBotonesReactivados = 0;
        let indice =0;
        while(contadorBotonesReactivados < cantidadBotonesDesactivados) {
            vectorBotonesDesactivados[indice].setAttribute("class", "btn btn-info");
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
        return cantidadLetrasClickeadas<=cantidadLetrasPalabraSeleccionada && !adivinoLaPalabra(); 
    }
    function adivinoLaPalabra(){
        return  obtenerCantidadEntradasVacias() == 0;
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

    

    constructor();



