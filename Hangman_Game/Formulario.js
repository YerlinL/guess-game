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
            botonNuevo.onclick = function() {puedeSeguirJugando(botonNuevo)};
            formulario.appendChild(botonNuevo);
            formulario.appendChild(espacio);
            
        }
     
    }
   
    function puedeSeguirJugando(boton){
        cantidadLetrasClickeadas+=1;   
        if(cantidadLetrasClickeadas<=cantidadLetrasPalabraSeleccionada){
            boton.setAttribute("class", "btn btn-info disabled");
            mostarLetraEnCuadroTexto(boton);
        }else{
            if(confirm("Do you want to play again")){
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
        let posicion = buscarPosicionLetra(letraBuscada);
        if(posicion!==-1){
            let cuadroTexto = document.getElementById(posicion.toString());
            cuadroTexto.value = letraBuscada;
        }
    }
    
    function buscarPosicionLetra(letraBuscada) {
        let posicion = palabraSeleccionada.indexOf(letraBuscada);
        return posicion;
    }

    constructor();



