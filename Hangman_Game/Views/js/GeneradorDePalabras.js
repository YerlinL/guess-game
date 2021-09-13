import Utils from './Utils/index.js'

const { generarNumeroAleatorio } = Utils

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
        let palabraGenerada = this.PALABRA_EN_BLANCO;
        let fueUtilizada = false;
        do{
            palabraGenerada =  this.#generarPalabraAletoria();
            fueUtilizada = this.esPalabraUsada.get(palabraGenerada);
        }while(fueUtilizada && this.#existenPalabrasSinUsar());

        if(this.#esPalabraValida(palabraGenerada)){
            this.esPalabraUsada[palabraGenerada] = this.USADA;
        }
        return palabraGenerada;
    }

    #esPalabraValida(palabra){
        return palabra !==this.PALABRA_EN_BLANCO;
    }

    #generarPalabraAletoria(){
        const numeroDePalabra = generarNumeroAleatorio(this.cantidadPalabrasParaJugar); 
        return this.palabrasParaJugar[numeroDePalabra];
    }

    #existenPalabrasSinUsar(){
        let respuesta = false;
        this.esPalabraUsada.forEach(estadoDePalabra=>{
            if(estadoDePalabra === this.NO_USADA)
                respuesta = true
        })
        return respuesta;
    }
}

export default GeneradorDePalabras;