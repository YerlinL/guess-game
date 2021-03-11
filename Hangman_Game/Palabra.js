const VECTOROCUPACIONES = ["baker", "butcher", "salesman", "saleswoman", "cashier", 
                        "hair dresser", "mechanic", "chef", "farmer", "waiter", "waitress"];
class Palabra{

    palabraSeleccionada = "";
    cantidadLetras = 0;

    palabra(){
       this.palabraSeleccionada = elegirPalabra();
       this.cantidadLetras = this.palabraSeleccionada.length();
    }

    elegirPalabra(){
        let posicionLetra = this.generarNumeroAleatorio();
        return VECTOROCUPACIONES[posicionLetra];
    }
    
    generarNumeroAleatorio(){
        let longitudVector = VECTOROCUPACIONES.length();
        let aleatorio= Math.floor(Math.random()*longitudVector);
        return aleatorio;
    }

    getPalabra(){
        return this.palabraSeleccionada;
    }

    getCantidadLetras(){
        return this.cantidadLetras;
    }

   
    
}