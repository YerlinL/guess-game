import form from './Formulario.js'
import estadoJuego from './Juego.js'
import objetoPalabra from './Palabra.js'

const palabra = new objetoPalabra(); 
function constructorJuego(){
    let volverAJugar = estadoJuego.getQuiereVolverJugar();
        alert("while");
        let palabraSeleccionada = palabra.getPalabra();
        let cantidadLetrasPalabraSeleccionada = palabra.getCantidadLetras();
        form(cantidadLetrasPalabraSeleccionada);
        estadoJuego.constructor(palabraSeleccionada,cantidadLetrasPalabraSeleccionada);
        
        
    
    
}

constructorJuego();