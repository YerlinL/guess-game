import elementoHTML from './ElementoHTMLBuilder.js';
//import juego from './Juego.js'
    
//    var cantidadLetrasPalabraSeleccionada = 0;
//     function agregarElementosFormulario(){
//         juego.constructor()//toDp cambiar nombre
//         cantidadLetrasPalabraSeleccionada = juego.getCantidadLetras();
//         alert(cantidadLetrasPalabraSeleccionada);
//         crearFormulario(cantidadLetrasPalabraSeleccionada);
            
//     }
    function constructor(){
        /*juego.llenarVectorPalabrasUsadas();
        alert("Ya se lleno el vector");*/
        generarAbecedario();  
        //agregarElementosFormulario();
        crearFormulario(10);
    }
    
    function crearFormulario(cantidadLetrasPalabraSeleccionada){ 
        let formulario = document.getElementById("input");
        const altura = '70px';
        const ancho = '80px';
        const desactivado= true;
        for(let cantidadCuadrosTexto= 0; cantidadCuadrosTexto < cantidadLetrasPalabraSeleccionada; ++cantidadCuadrosTexto){
    
            let elementoNuevo = document.createElement('input');
            const elemento = new elementoHTML(elementoNuevo)
                            .establecerAltura(altura)
                            .establecerAncho(ancho)
                            .establecerID(cantidadCuadrosTexto.toString())
                            .establecerEstado(desactivado);
            let input = elemento.obtenerElemento();
           
            formulario.appendChild(input);
           
        }    
       
    }
    
    function generarAbecedario(){
        const altura = '60px';
        const ancho = '60px';
        const colorFondo = '#ff6565';
        const colorBorde = 'solid 1px #a94a50';
        let a = 97;
        let z = 122;
        let j = 106;
        let s = 115;
        let abecedario = document.getElementById("abecedario");
        let espacio = document.createTextNode("\u00a0");
        
        for (let letra = a; letra <= z; ++letra){
                 
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
            //botonNuevo.onclick = async function() {await prueba(botonNuevo)};
            abecedario.appendChild(botonNuevo);
            abecedario.appendChild(espacio);
           
            if(letra===j || letra===s){
                agregarCambioLinea(abecedario);
                
            }
            
        }
     
    }

    function agregarCambioLinea(elemento){
        let cambioLinea = document.createElement("br");
        elemento.appendChild(cambioLinea);
    }
    // async function prueba(botonNuevo){
    //    await juego.seguirJugando(botonNuevo);
        
    //    if(!juego.puedeSeguirJugando()){
    //         if(true){
    //             agregarElementosFormulario();
    //             juego.setCantidadLetrasClickeadas(0);
    //         }
              

    //     }

    // }

constructor();


