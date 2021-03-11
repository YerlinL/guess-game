import elementoHTML from './ElementoHTMLBuilder.js';
import objetoPalabra from './Palabra.js';



   const palabra = new objetoPalabra();
   var palabraSeleccionada;

   function constructor(){
       palabraSeleccionada = palabra.getPalabra();
       let cantidadLetras = palabra.getCantidadLetras();
       crearFormulario(cantidadLetras);
       generarAbecedario();
   }

    function crearFormulario(cantidadLetras){ 
        let formulario = document.getElementById("input");
        const altura = '50px';
        const ancho = '50px';
        const colorFondo = 'snow';
    
        for(let cantidadCuadrosTexto= 0; cantidadCuadrosTexto < cantidadLetras; ++cantidadCuadrosTexto){
    
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
            botonNuevo.onclick = function() {mostarLetraEnCuadroTexto(botonNuevo)};
            formulario.appendChild(botonNuevo);
            formulario.appendChild(espacio);
            
        }
     
    }

    function mostarLetraEnCuadroTexto(boton){
        boton.setAttribute("class", "btn btn-info disabled");
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



