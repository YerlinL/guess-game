import Constantes from './Constantes.js'

const { estadosPartida } = Constantes

class Partida {
    constructor(palabra){
        this.letrasFaltantesParaGanar = Array.from(palabra).filter(letra=>letra!==" ");
        this.palabraFormada;
        this.clicsErroneosActuales = 0;
        this.maximoClics = palabra.length;
    }

    actualizarEstadoDePartida(letraSeleccionada){
        const letrasPorAdivinarAntes = this.letrasFaltantesParaGanar.length
        this.letrasFaltantesParaGanar = 
            this.letrasFaltantesParaGanar.filter(letra=>letra!==letraSeleccionada);
        const letrasPorAdivinarDespues = this.letrasFaltantesParaGanar.length

        if(letrasPorAdivinarAntes===letrasPorAdivinarDespues){
            this.#aumentarClicsErroneos();
        }
            
        return this.#retornarEstado();
    }

    #retornarEstado(){
        let estado = null;
        if (this.#perdio()){
            estado = estadosPartida.perdio;
        }
        else if(this.#gano()){
            estado = estadosPartida.gano;
        }
        else{
            estado = estadosPartida.continua;
        }
        return {estado, clics:this.clicsErroneosActuales};
    }

    #perdio(){
        return this.maximoClics === this.clicsErroneosActuales;
    }

    #gano(){
        return this.letrasFaltantesParaGanar.length === 0;
    }

    #aumentarClicsErroneos(){
        this.clicsErroneosActuales = this.clicsErroneosActuales + 1;
    }

}

export default Partida;