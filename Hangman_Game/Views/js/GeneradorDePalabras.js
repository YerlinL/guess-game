import Utils from './Utils/index.js'

const { generarNumeroAleatorio } = Utils
const USADA = true;
const NO_USADA = false;
const PALABRA_EN_BLANCO = ''
class GeneradorDePalabras {

    constructor(palabrasParaJugar){
        this.palabrasParaJugar = palabrasParaJugar;
        this.cantidadPalabrasParaJugar = palabrasParaJugar.length;
        this.esPalabraUsada = new Map();
        this.#inicializarEsPalabraUsada();
        const valores = [...this.esPalabraUsada.entries()];
        for (const valor of valores){
            console.log(valor);
        }
        
    }

    #inicializarEsPalabraUsada(){
        for(const palabra of this.palabrasParaJugar)
            this.esPalabraUsada.set(palabra,NO_USADA);
    }

    elegirPalabra(){
        let palabraGenerada = PALABRA_EN_BLANCO;
        let fueUtilizada = false;
        let quedanPalabras = true;
        do{
            palabraGenerada =  this.#generarPalabraAletoria();
            fueUtilizada = this.esPalabraUsada.get(palabraGenerada);
            quedanPalabras = this.#existenPalabrasSinUsar();
            if(quedanPalabras === false && fueUtilizada === USADA){
                palabraGenerada = PALABRA_EN_BLANCO;
            }
        }while(this.#palabraFueUsada(palabraGenerada) && quedanPalabras === true );

        if(this.#esPalabraValida(palabraGenerada)){
            this.esPalabraUsada.set(palabraGenerada, USADA);
            
        }
        
        
        return palabraGenerada;
    }

    #palabraFueUsada(palabra){
        const resultado = this.esPalabraUsada.get(palabra)
        return resultado!==undefined && resultado === true; 
    }

    #esPalabraValida(palabra){
        return palabra !==PALABRA_EN_BLANCO;
    }

    #generarPalabraAletoria(){
        const numeroDePalabra = generarNumeroAleatorio(this.cantidadPalabrasParaJugar); 
        return this.palabrasParaJugar[numeroDePalabra];
    }

    #existenPalabrasSinUsar(){
        let respuesta = false;
        const palabras = [...this.esPalabraUsada.keys()];
        for (const palabra of palabras){
            const estadoDePalabra = this.esPalabraUsada.get(palabra);
            if(estadoDePalabra === NO_USADA){
                respuesta = true
                break;
            }
                
        }
            
        
        return respuesta;
    }
}

export default GeneradorDePalabras;