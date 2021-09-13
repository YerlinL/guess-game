import ElementoHTML from './ElementoHTMLBuilder.js'; 
import GeneradorDePalabras from './GeneradorDePalabras.js';
import Partida from './Partida.js'
import Constantes from './Constantes.js'

const { ocupaciones, estadosPartida } = Constantes
const generador = new GeneradorDePalabras(ocupaciones);
const palabra = generador.elegirPalabra();
const partida = new Partida(palabra)

function iniciar(){
    generarAbecedario(); 
    alert(palabra)
    crearFormulario(palabra.length);
}

function crearFormulario(cantidadLetrasPalabraSeleccionada){ 
    let formulario = document.getElementById("input");
    const altura = '50px';
    const ancho = '50px';
    const desactivado= true;
    for(let cantidadCuadrosTexto= 0; cantidadCuadrosTexto < cantidadLetrasPalabraSeleccionada; ++cantidadCuadrosTexto){

        let elementoNuevo = document.createElement('input');
        const elemento = new ElementoHTML(elementoNuevo)
                        .establecerAltura(altura)
                        .establecerAncho(ancho)
                        .establecerID(cantidadCuadrosTexto.toString())
                        .establecerEstado(desactivado);
        let input = elemento.obtenerElemento();
        
        formulario.appendChild(input);
        
    }    
    
}

function generarAbecedario(){
    const altura = '55px';
    const ancho = '60px';
    const colorFondo = '#ff6565';
    const colorBorde = 'solid 1px #a94a50';
    let a = 97;
    let z = 122;
    let g = 103;
    let n = 110;
    let u = 117;
    let abecedario = document.getElementById("abecedario");
    let espacio = document.createTextNode("\u00a0");
    
    for (let letra = a; letra <= z; ++letra){
                
        let elementoNuevo = document.createElement('button');
        let letraCreada = String.fromCharCode(letra);
        const boton = new ElementoHTML(elementoNuevo)
                        .establecerID(letraCreada)
                        .establecerTipo("button")
                        .establecerClase("btn btn-info")
                        .establecerAltura(altura)
                        .establecerAncho(ancho)
                        .establecerColorFondo(colorFondo)
                        .establecerColorBorde(colorBorde);
        const botonNuevo  = boton.obtenerElemento(); 
        botonNuevo.innerText= letraCreada;
        botonNuevo.onclick = adivinar;
        abecedario.appendChild(botonNuevo);
        abecedario.appendChild(espacio);
        
        if(letra===g || letra===n || letra===u ){
            agregarCambioLinea(abecedario);
            
        }
        
    }
    
}

function adivinar(){
   const letraSeleccionada = this.innerText;
   const estado = partida.actualizarEstadoDePartida(letraSeleccionada)

}

function agregarCambioLinea(elemento){
    let cambioLinea = document.createElement("br");
    elemento.appendChild(cambioLinea);
}

iniciar();


