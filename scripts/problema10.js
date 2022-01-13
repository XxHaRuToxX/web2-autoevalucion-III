/* 
    Haz un programa de nombre Eval3J.htm que lea un sistema de tres ecuaciones con tres incógnitas y
    nos escriba la matriz ampliada. Suponiendo que todos los coeficientes son positivos y constan de un
    único dígito. Deberás utilizar la función texto.charAt(num)    
*/

const matrizNormal = ()=>{
    let ai = parseInt(prompt('Ingrese el primer coeficiente de a1: '), 10)
    let aj = parseInt(prompt('Ingrese el segundo coeficiente de a2: '), 10)
    let ak = parseInt(prompt('Ingrese el tercer coeficiente de a3: '), 10)

    let bi = parseInt(prompt('Ingrese el primer coeficiente de b1: '), 10)
    let bj = parseInt(prompt('Ingrese el segundo coeficiente de b2: '), 10)
    let bk = parseInt(prompt('Ingrese el tercer coeficiente de b3: '), 10)

    let ci = parseInt(prompt('Ingrese el primer coeficiente de c1: '), 10)
    let cj = parseInt(prompt('Ingrese el segundo coeficiente de c2: '), 10)
    let ck = parseInt(prompt('Ingrese el tercer coeficiente de c3: '), 10)

    let di = prompt('Ingrese el primer coeficiente de d1: ');
    let dj = prompt('Ingrese el segundo coeficiente de d2: ');
    let dk = prompt('Ingrese el tercer coeficiente de d3: ');

    alert(`Matriz normal:\n${ai}x + ${aj}y + ${ak}z = ${di.charAt(0)}\n${bi}x + ${bj}y + ${bk}z = ${dj.charAt(0)}\n${ci}x + ${cj}y + ${ck}z = ${dk.charAt(0)}\n
    La matriz ampliada seria:\n${ai} ${aj} ${ak} ${di.charAt(0)}\n${bi} ${bj} ${bk} ${dj.charAt(0)}\n${ci} ${cj} ${ck} ${dk.charAt(0)}
    `)
}
matrizNormal();