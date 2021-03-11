import e from './ElementoHTML.js';
function crearFormulario(cantidadLetras){
    
    let formulario = document.getElementById("formularioJuego");
    for(let cantidadEntradas = 0; cantidadEntradas < cantidadLetras; ++cantidadEntradas){
        let input = document.createElement('input');
        input.style.width = '50px'; 
        input.style.height = '50px'; 
        input.style.background = 'snow'
        formulario.appendChild(input);
    }
   

}
function generarAbecedario(){
    let a = 97;
    let z = 122;
    let m = 110;
    let formulario = document.getElementById("abecedario");

    for (let letra = a; letra <= z; ++letra){
        if(letra === m){
           let br = document.createElement('br');
           formulario.appendChild(br); 
        }
        let espacio = document.createTextNode("\u00a0");
        let botonLetra = document.createElement('button');
        
        botonLetra.innerHTML = String.fromCharCode(letra);
        botonLetra.setAttribute("id", "letra"+letra);
        botonLetra.setAttribute("type", "button");
        botonLetra.setAttribute("class", "btn btn-info");
        botonLetra.style.width = '50px'; 
        botonLetra. style.height = '50px'; 
        botonLetra.style.background = "teal";
        botonLetra.style.border = "teal"
        botonLetra.onclick = function(){botonLetra.setAttribute("class", "btn btn-info disabled");}
        formulario.appendChild(botonLetra);
        formulario.appendChild(espacio);
       
        
    }
}



crearFormulario(5);
generarAbecedario();