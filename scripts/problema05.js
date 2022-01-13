/* 
    Haz un programa de nombre Eval3E.htm, que sirva para calcular el área de un triángulo en el
    espacio, utilizando la función del ejercicio anterior.
    Recuerda:
    A=(a1,a2,a3), B=(b1,b2,b3), C=(c1,c2,c3)
    AB=(b1-a1,b2-a2,b3-a3), AC=(c1-a1,c2-a2,c3-a3)
    Área del triángulo ABC: mitad del producto vectorial de AB y AC (consulta el Eval2P.htm)
    Compruébalo para el siguiente caso:
*/

let a1 = parseInt(prompt('Inserte el valor de Ai:',''), 10);
let a2 = parseInt(prompt('Inserte el valor de Aj:',''), 10);
let a3 = parseInt(prompt('Inserte el valor de Ak:',''), 10);

let b1 = parseInt(prompt('Inserte el valor de Bi:',''), 10);
let b2 = parseInt(prompt('Inserte el valor de Bj:',''), 10);
let b3 = parseInt(prompt('Inserte el valor de Bk:',''), 10);

let c1 = parseInt(prompt('Inserte el valor de Ci:',''), 10);
let c2 = parseInt(prompt('Inserte el valor de Cj:',''), 10);
let c3 = parseInt(prompt('Inserte el valor de Ck:',''), 10);

let b1a1 = b1 - a1;
let b2a2 = b2 - a2;
let b3a3 = b3 - a3;

let c1a1 = c1 - a1;
let c2a2 = c2 - a2;
let c3a3 = c3 - a3;

let AB = {b1a1, b2a2, b3a3};
let AC = {c1a1, c2a2, c3a3}

let i;
let j;
let k;

const areaTriangularEnEspacio= ()=>{
    i = (AB.b2a2 * AC.c3a3) - (AC.c2a2 * AB.b3a3);
    j = (AC.c1a1 * AB.b3a3) - (AB.b1a1 * AC.c3a3);
    k = (AB.b1a1 * AC.c2a2) - (AB.b2a2 * AC.c1a1);
    return (Math.sqrt((i * i) + (j * j) + (k * k) )/2);
}

alert(`El area del triangulo en el espacio es: ${areaTriangularEnEspacio()}`)


