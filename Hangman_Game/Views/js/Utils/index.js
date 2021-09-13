function generarNumeroAleatorio(Maximo){
    let aleatorio= Math.floor(Math.random()*Maximo);
    return aleatorio;
}
const wait = time => {
    const start = Date.now();
    while(Date.now()-start < time){}
}

export default {
    generarNumeroAleatorio,
    wait
}

