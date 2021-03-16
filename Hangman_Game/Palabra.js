const VECTOROCUPACIONES = ["baker", "butcher", "salesman", "saleswoman", "cashier", 
                        "hair dresser", "mechanic", "chef", "farmer", "waiter", "waitress"];
class Palabra{

    palabraSeleccionada = "";
    cantidadLetras = 0;
    vectorPalabrasUsadas = [];
    longitudVector =  VECTOROCUPACIONES.length;
    constructor(){
       this.vectorPalabrasUsadas.length = this.longitudVector;
       this.vectorPalabrasUsadas.fill(false);
       this.palabraSeleccionada = this.elegirPalabra();
       this.cantidadLetras = this.palabraSeleccionada.length;
    }


    elegirPalabra(){
        let posicionLetra = this.generarNumeroAleatorio(); 
        let contador = 0;
        let palabraElegida = "";
        
        while(this.vectorPalabrasUsadas[posicionLetra]!=false && contador < this.longitudVector){
            posicionLetra = this.generarNumeroAleatorio();
            ++contador;
        }
        if(contador < this.longitudVector){
            palabraElegida = VECTOROCUPACIONES[posicionLetra];
            this.vectorPalabrasUsadas[posicionLetra] = true;
            contador = 0;
            
        }else{
            window.alert("All the words was used");
            this.vectorPalabrasUsadas.fill(false);
        }
        
        return palabraElegida;
    }
    
    generarNumeroAleatorio(){
        let aleatorio= Math.floor(Math.random()*this.longitudVector);
        return aleatorio;
    }

    getPalabra(){
        return this.palabraSeleccionada;
    }

    getCantidadLetras(){
        return this.cantidadLetras;
    }
   
}
export default Palabra;