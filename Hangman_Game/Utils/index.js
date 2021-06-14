const sp = require('synchronized-promise');

function generarNumeroAleatorio(Maximo){
    let aleatorio= Math.floor(Math.random()*Maximo);
    return aleatorio;
}

const sleep = time => new Promise(resolve =>setTimeout(resolve,time))
const wait = sp(sleep);

export default {
    generarNumeroAleatorio,
    wait
}

