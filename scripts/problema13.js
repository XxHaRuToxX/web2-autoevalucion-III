/* 
    Haz un programa de nombre Eval3M.htm, que simule una tirada aleatoria de cinco dados de parchís.
*/

const aleatorio=(inferior, superior)=> {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

const lanzarDados = () =>{
    alert('Usted lanzara 5 dados de parchis...');
    let resul1 = parseInt(aleatorio(1,6));
    let resul2 = parseInt(aleatorio(1,6));
    let resul3 = parseInt(aleatorio(1,6));
    let resul4 = parseInt(aleatorio(1,6));
    let resul5 = parseInt(aleatorio(1,6));
    alert(`Los resultados de los 5 dados son: ${resul1}, ${resul2}, ${resul3}, ${resul4}, ${resul5}`)
}

lanzarDados();

let volver = confirm('¿Desea lanzar de nuevo los dados?')

if(volver){
    lanzarDados()
}else{
    alert('Programa terminado...')
}

