/* 
    Haz un programa de nombre Eval3L.htm, que sirva para discutir un sistema de tres ecuaciones con
    tres incógnitas, sólo en los casos compatible determinado e incompatible y lo resuelve en el caso
    compatible determinado.
*/

let a = parseInt(prompt('Ingrese el primer coeficiente de a: '), 10)
let b = parseInt(prompt('Ingrese el segundo coeficiente de b: '), 10)
let c = parseInt(prompt('Ingrese el tercer coeficiente de c: '), 10)

let d = parseInt(prompt('Ingrese el primer coeficiente de d: '), 10)
let e = parseInt(prompt('Ingrese el segundo coeficiente de e: '), 10)
let f = parseInt(prompt('Ingrese el tercer coeficiente de f: '), 10)

let g = parseInt(prompt('Ingrese el primer coeficiente de g: '), 10)
let h = parseInt(prompt('Ingrese el segundo coeficiente de h: '), 10)
let i = parseInt(prompt('Ingrese el tercer coeficiente de i: '), 10)

let j = parseInt(prompt('Ingrese el primer coeficiente de j: '), 10)
let k = parseInt(prompt('Ingrese el segundo coeficiente de k: '), 10)
let l = parseInt(prompt('Ingrese el tercer coeficiente de l: '), 10)

let det = ((a*e*i)+(d*c*h)+(b*f*g)) - ((g*e*c)+(h*f*a)+(d*b*i));
let detx = ((j*e*i)+(k*c*h)+(b*f*l)) - ((l*e*c)+(h*f*j)+(k*b*i));
let dety = ((a*k*i)+(d*c*l)+(j*f*g)) - ((g*k*c)+(l*f*a)+(d*j*i));
let detz = ((a*e*l)+(d*j*h)+(b*k*g)) - ((g*e*j)+(h*k*a)+(d*b*l));
let x = detx/det;
let y = dety/det;
let z = detz/det;

if(det !== 0){
    // alert(`El sistema es compatible`);
    // alert(`La solución por Cramer es: x = ${x}, y = ${y}, z = ${z}`)
    if(detx === 0 || dety === 0 || detz === 0){
        alert(`Matriz normal:\n${a}x + ${b}y + ${c}z = ${j}\n${d}x + ${e}y + ${f}z = ${k}\n${g}x + ${h}y + ${i}z = ${l}\n
        El sistema es compatible indeterminado
    `)
    }else{
        alert(`Matriz normal:\n${a}x + ${b}y + ${c}z = ${j}\n${d}x + ${e}y + ${f}z = ${k}\n${g}x + ${h}y + ${i}z = ${l}\n
        La determiante de la matriz es: ${det}\n
        La determiante de la matriz en x: ${detx}\n
        La determiante de la matriz en y: ${dety}\n
        La determiante de la matriz en z: ${detz}\n
        El sistema es compatible\n
        La solución por Cramer es: x = ${x}, y = ${y}, z = ${z}
        `)
    }
}else{
    if(detx !== 0 || dety !== 0 || detz !== 0){
        alert(`Matriz normal:\n${a}x + ${b}y + ${c}z = ${j}\n${d}x + ${e}y + ${f}z = ${k}\n${g}x + ${h}y + ${i}z = ${l}\n
        El sistema es incompatible
    `)
    }
}


