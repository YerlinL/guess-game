import ElementoHTML from './ElementoHTMLBuilder.js'; 
import GeneradorPartidas from "./GeneradorPartidas.js";
import Constantes from './Constantes.js'

const BOTON_DESHABILIDADO = "btn btn-info disabled";
const BOTON_HABILITADO = "btn btn-info";
const { estadosPartida } = Constantes;
const generadorPartidas = new GeneradorPartidas();
let { partida,palabra } = generadorPartidas.generarPartida();


function iniciar(){
    generarAbecedario(); 
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
    this.className=BOTON_DESHABILIDADO;
    const letraSeleccionada = this.innerText;
    const { estado } = partida.actualizarEstadoDePartida(letraSeleccionada);
    alert(estado);
    if(estado === estadosPartida.gano){
        alert("Congratulations you win!, try with another word");
        regenerarPartida();
    }else if(estado === estadosPartida.perdio){
        alert("You lost, good luck next time, try again");
        regenerarPartida();
    }
}

function regenerarPartida(){
    borrarFormulario();
    habilitarBotones();
    const partidaGenerada = generadorPartidas.generarPartida();
    partida = partidaGenerada.partida;
    palabra = partidaGenerada.palabra;
    alert("La nueva palabra es " + palabra);
    if(partida!==null){
        crearFormulario(palabra.length);
    }else{
        alert("Game finished");
    }
}

function borrarFormulario(){
    const padre = document.getElementById("input");
    while(padre.firstChild){
        padre.removeChild(padre.firstChild);
    }
}
function habilitarBotones(){
    const padre = document.getElementById("abecedario");
    const botonesAbecedario = padre.childNodes;
    for (let boton of botonesAbecedario){
        if(boton.className === BOTON_DESHABILIDADO){
            boton.className = BOTON_HABILITADO;
        }
    }


}

function agregarCambioLinea(elemento){
    let cambioLinea = document.createElement("br");
    elemento.appendChild(cambioLinea);
}

iniciar();


