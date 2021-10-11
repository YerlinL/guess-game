import GeneradorDePalabras from './GeneradorDePalabras.js';
import Partida from './Partida.js'
import Constantes from './Constantes.js'

const { ocupaciones } = Constantes;

class GeneradorPartidas{
    constructor(){
        this.generadorDePalabras = new GeneradorDePalabras(ocupaciones);
    }

    generarPartida(){
        const palabra = this.generadorDePalabras.elegirPalabra();
        let partida = null;
        if(palabra!==GeneradorDePalabras.PALABRA_EN_BLANCO){
            partida = new Partida(palabra);
        }
        return { partida,palabra };
    }


}

function adivinar(){
    const letraSeleccionada = this.innerText;
    const estado = partida.actualizarEstadoDePartida(letraSeleccionada)
 
 }

 export default GeneradorPartidas;