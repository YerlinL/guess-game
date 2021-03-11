const VECTOROCUPACIONES = ["baker", "butcher", "salesman", "saleswoman", "cashier", 
                        "hair dresser", "mechanic", "chef", "farmer", "waiter", "waitress"];
class Palabra{
    
    palabra(){

    }

    generarNumeroAleatorio(){
        let longitudVector = VECTOROCUPACIONES.length();
        let aleatorio= Math.floor(Math.random()*longitudVector);
        return aleatorio;
    }

    elegirOcupacion(){
        let posicionOcupacion = this.generarNumeroAleatorio();
        return VECTOROCUPACIONES[posicionOcupacion];
    }
    
    
}