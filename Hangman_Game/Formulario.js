import elementoHTML from './ElementoHTMLBuilder.js';
import juego from './Juego.js'
    
   var cantidadLetrasPalabraSeleccionada = 0;
    function agregarElementosFormulario(){
        juego.constructor()//toDp cambiar nombre
        cantidadLetrasPalabraSeleccionada = juego.getCantidadLetras();
        alert(cantidadLetrasPalabraSeleccionada);
        crearFormulario(cantidadLetrasPalabraSeleccionada);
            
    }
    function constructor(){
        juego.llenarVectorPalabrasUsadas();
        alert("Ya se lleno el vector");
        generarAbecedario();  
        agregarElementosFormulario();
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
            botonNuevo.onclick = async function() {await prueba(botonNuevo)};
            formulario.appendChild(botonNuevo);
            formulario.appendChild(espacio);
            
        }
     
    }
    async function prueba(botonNuevo){
       await juego.seguirJugando(botonNuevo);
        
       if(!juego.puedeSeguirJugando()){
            if(true){
                agregarElementosFormulario();
                juego.setCantidadLetrasClickeadas(0);
            }
              

        }

    }

constructor();


