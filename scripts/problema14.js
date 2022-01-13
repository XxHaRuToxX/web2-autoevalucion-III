/* 
    Haz un programa de nombre Eval3N.htm, que resuelva un sistema de dos ecuaciones con dos incógnitas por el método de Cramer.
    Crea una función que calcule un determinante de 2º orden
    Compruébalo para el caso: 
        3x-y=1
        x+y=3 
    solución: x=1, y=2
*/

let a = parseInt(prompt('Ingrese el primer coeficiente de a: '), 10)
let b = parseInt(prompt('Ingrese el segundo coeficiente de b: '), 10)

let c = parseInt(prompt('Ingrese el tercer coeficiente de c: '), 10)
let d = parseInt(prompt('Ingrese el primer coeficiente de d: '), 10)

let e = parseInt(prompt('Ingrese el tercer coeficiente de e: '), 10)
let f = parseInt(prompt('Ingrese el primer coeficiente de f: '), 10)

let det = (a*d) - (c*b);
let detx = (e*d) - (f*b);
let dety = (a*f) - (c*e);

let x = detx/det;
let y = dety/det;

if(det !== 0){
        alert(`Matriz normal:\n${a}x + ${b}y = ${e}\n${c}x + ${d}y = ${f}\n
        La determiante de la matriz es: ${det}\n
        La determiante de la matriz en x: ${detx}\n
        La determiante de la matriz en y: ${dety}\n
        El sistema es compatible\n
        La solución por Cramer es: x = ${x}, y = ${y}
        `)
    
}else{
    if(detx !== 0 || dety !== 0 || detz !== 0){
        alert(`Matriz normal:\n${a}x + ${b}y = ${e}\n${c}x + ${d}y = ${f}\n
        El sistema es incompatible
    `)
    }
}

