const { generarNumeroAleatorio } = require('./Utils/index')

class GeneradorDePalabras {

    static USADA = true;
    static NO_USADA = false;
    static PALABRA_EN_BLANCO = ''

    constructor(palabrasParaJugar){
        this.palabrasParaJugar = palabrasParaJugar;
        this.cantidadPalabrasParaJugar = palabrasParaJugar.length;
        this.esPalabraUsada = new Map();
        this.#inicializarEsPalabraUsada();
    }

    #inicializarEsPalabraUsada(){
        for(const palabra in this.palabrasParaJugar)
            this.esPalabraUsada.set(palabra,false);
    }

    elegirPalabra(){
        let palabraGenerada = PALABRA_EN_BLANCO;
        let fueUtilizada = false;
        do{
            palabraGenerada =  this.#generarPalabraAletoria();
            fueUtilizada = this.esPalabraUsada.get(palabraGenerada);
        }while(fueUtilizada && this.#existenPalabrasSinUsar());

        if(esPalabraValida(palabraGenerada)){
            this.esPalabraUsada[palabraGenerada] = USADA;
        }
        return palabraGenerada;
    }

    esPalabraValida(palabra){
        return palabra !==PALABRA_EN_BLANCO;
    }

    #generarPalabraAletoria(){
        const numeroDePalabra = generarNumeroAleatorio(this.cantidadPalabrasParaJugar); 
        return this.palabrasParaJugar[numeroDePalabra];
    }

    #existenPalabrasSinUsar(){
        let respuesta = false;
        this.esPalabraUsada.forEach(estadoDePalabra=>{
            if(estadoDePalabra === NO_USADA)
                respuesta = true
        })
        return respuesta;
    }
}

module.exports = GeneradorDePalabras;