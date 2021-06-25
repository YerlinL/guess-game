import elementoHTML from './ElementoHTML.js';
class ElementoHTMLBuilder extends elementoHTML{
    
    constructor(elemento){
        super(elemento);
    }

    establecerID(id){
        let elemento = this.obtenerElemento();
        elemento.setAttribute("id", id);
        this.establecerElemento(elemento);
        return this;
    }

    establecerTipo(tipoElemento){
        let elemento = this.obtenerElemento();
        elemento.setAttribute("type", tipoElemento);
        this.establecerElemento(elemento);
        return this;
    }

    establecerClase(clase){
        let elemento = this.obtenerElemento()
        elemento.setAttribute("class", clase);
        this.establecerElemento(elemento);
        return this;
    }

    establecerAncho(ancho){
        let elemento = this.obtenerElemento();
        elemento.style.width = ancho;
        this.establecerElemento(elemento);
        return this;
    }

    establecerAltura(altura){
        let elemento = this.obtenerElemento();
        elemento.style.height = altura;
        this.establecerElemento(elemento);
        return this;
    }

    establecerColorFondo(colorFondo){
        let elemento = this.obtenerElemento();
        elemento.style.background = colorFondo;
        this.establecerElemento(elemento);
        return this;
    }
    
    establecerColorBorde(colorBorde){
        let elemento = this.obtenerElemento();
        elemento.style.border = colorBorde;
        this.establecerElemento(elemento);
        return this;
    }
    
    establecerEstado(estado){
        let elemento = this.obtenerElemento();
        elemento.disabled = estado;
        this.establecerElemento(elemento);
        return this;
    }

    obtenerElemento(){
        return super.obtenerElemento();
    }

}
export default ElementoHTMLBuilder;