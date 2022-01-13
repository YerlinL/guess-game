import ElementoHTML from "./ElementoHTMLBuilder.js";
import GeneradorPartidas from "./GeneradorPartidas.js";
import Constantes from "./Constantes.js";
import Utils from "./Utils/index.js";

const BOTON_DESHABILIDADO = "btn btn-info disabled";
const BOTON_HABILITADO = "btn btn-info";
const ID_AUDIO = "pistaAudio";
const { estadosPartida, pistas, audios, oraciones, imagenes} = Constantes;
const generadorPartidas = new GeneradorPartidas();
let { partida, palabra } = generadorPartidas.generarPartida();
let audio = null;

function iniciar() {
  generarAbecedario();
  crearFormulario(palabra.length);
  asignarPista(palabra);
  
}

function crearFormulario(cantidadLetrasPalabraSeleccionada) {
  let formulario = document.getElementById("input");
  const altura = "50px";
  const ancho = "50px";
  const desactivado = true;
  for (
    let cantidadCuadrosTexto = 0;
    cantidadCuadrosTexto < cantidadLetrasPalabraSeleccionada;
    ++cantidadCuadrosTexto
  ) {
    let elementoNuevo = document.createElement("input");
    const elemento = new ElementoHTML(elementoNuevo)
      .establecerAltura(altura)
      .establecerAncho(ancho)
      .establecerID(cantidadCuadrosTexto)
      .establecerClase(palabra[cantidadCuadrosTexto])
      .establecerEstado(desactivado);
    let input = elemento.obtenerElemento();
    formulario.appendChild(input);
  }
}

function generarAbecedario() {
  const altura = "55px";
  const ancho = "60px";
  const colorFondo = "#ff6565";
  const colorBorde = "solid 1px #a94a50";
  let a = 97;
  let z = 122;
  let g = 103;
  let n = 110;
  let u = 117;
  let abecedario = document.getElementById("abecedario");
  let espacio = document.createTextNode("\u00a0");

  for (let letra = a; letra <= z; ++letra) {
    let elementoNuevo = document.createElement("button");
    let letraCreada = String.fromCharCode(letra);
    const boton = new ElementoHTML(elementoNuevo)
      .establecerTipo("button")
      .establecerClase("btn btn-info")
      .establecerAltura(altura)
      .establecerAncho(ancho)
      .establecerColorFondo(colorFondo)
      .establecerColorBorde(colorBorde);
    const botonNuevo = boton.obtenerElemento();
    botonNuevo.innerText = letraCreada;
    botonNuevo.onclick = adivinar;
    abecedario.appendChild(botonNuevo);
    abecedario.appendChild(espacio);

    if (letra === g || letra === n || letra === u) {
      agregarCambioLinea(abecedario);
    }
  }
}

function adivinar() {
  this.className = BOTON_DESHABILIDADO;
  const letraSeleccionada = this.innerText;
  mostrarLetra(letraSeleccionada);
  const { estado } = partida.actualizarEstadoDePartida(letraSeleccionada);
  if (estado === estadosPartida.gano) {
    mostrarModal();
    regenerarPartida();
  } else if (estado === estadosPartida.perdio) {
    mostrarModal();
    regenerarPartida();
  }
}

function regenerarPartida() {
  borrarFormulario();
  habilitarBotones();
  const partidaGenerada = generadorPartidas.generarPartida();
  partida = partidaGenerada.partida;
  palabra = partidaGenerada.palabra;
  if (partida !== null) {
    crearFormulario(palabra.length);
    asignarPista(palabra);
  } else {
    alert("Game finished");
  }
}

function borrarFormulario() {
  const padre = document.getElementById("input");
  while (padre.firstChild) {
    padre.removeChild(padre.firstChild);
  }
}
function habilitarBotones() {
  const padre = document.getElementById("abecedario");
  const botonesAbecedario = padre.childNodes;
  for (let boton of botonesAbecedario) {
    if (boton.className === BOTON_DESHABILIDADO) {
      boton.className = BOTON_HABILITADO;
    }
  }
}

function agregarCambioLinea(elemento) {
  let cambioLinea = document.createElement("br");
  elemento.appendChild(cambioLinea);
}

function mostrarLetra(letraSeleccionada) {
  let cajas = document.getElementsByClassName(letraSeleccionada);
  for (let caja of cajas) {
    caja.value = letraSeleccionada;
    caja.style.color = "#a94a50";
    caja.style.textAlign = "center";
    caja.style.fontWeight = "bold";
  }
}

function asignarPista(palabra) {
  const tarjetaTexto = document.getElementById("pista");
  const tarjetaCarta = document.getElementById("pista-card");
  tarjetaTexto.innerText = pistas[palabra];
  tarjetaCarta.onmouseover = generarReproducirAudio(palabra);
  tarjetaCarta.onmouseout = detenerAudio;
}

function generarReproducirAudio(palabra) {
  const rutaAudio = audios[palabra].pista;
  return () => {
    audio = new Audio(rutaAudio);
    audio.id = ID_AUDIO;
    audio.play();
  };
}

function detenerAudio() {
  if (audio != null) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function mostrarModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  agregarTituloModal("bookstore");
  agregarOracionModal("bookstore");
  agregarImagenModal("bookstore");
  reproducirAudioModal("bookstore");
  
}

function cerrarModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function agregarOracionModal(palabra){
  let posicionTexto = document.getElementById('oracion');
  posicionTexto.innerText = oraciones[palabra].oracion;
  
}

function agregarImagenModal(palabra){
  let imagen = document.createElement('img');
  let img = document.getElementById("imagenPalabra");
  imagen.src = imagenes[palabra];
  img.innerHTML = "";
  img.appendChild(imagen);

  
}

function agregarTituloModal(palabra){
  let header = document.getElementById("tituloModal"); 
  header.innerText = oraciones[palabra].descripcion;
}


function reproducirAudioModal(palabra){
  let contadorReproducciones = 1;
  const rutaAudioDescripcion = audios[palabra].descripcion;
  const rutaAudioOracion = audios[palabra].oracion;
  let audioDescripcion = new Audio(rutaAudioDescripcion);
  audioDescripcion.onended = () =>{
    let audioOracion = new Audio(rutaAudioOracion);
    audioOracion.onended = () =>{
      if(contadorReproducciones!=2){
        contadorReproducciones+=1;
        audioDescripcion.play();
      }else{
        cerrarModal();
      }
      
    }
    audioOracion.play();
  }
  audioDescripcion.play();

}

/*Ventana modal https://www.w3schools.com/howto/howto_css_modals.asp*/

iniciar();
