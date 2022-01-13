/* 
    Haz un programa de nombre Eval3D.htm, que sirva para calcular el módulo de un vector en el
    espacio, utilizando una función.
*/
let i = parseInt(prompt('Inserte el valor de i:',''), 10);
let j = parseInt(prompt('Inserte el valor de j:',''), 10);
let k = parseInt(prompt('Inserte el valor de k:',''), 10);
const moduloVector = (i, j, k)=>{
    return Math.abs(Math.sqrt(((Math.pow(i, 2)) + (Math.pow(j, 2)) + (Math.pow(k, 2)))));
}

alert(`El modulo del vector en el espacio es: ${moduloVector(i,j,k)}` )

