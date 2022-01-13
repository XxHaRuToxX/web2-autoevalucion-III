/* 
    Haz un programa de nombre Eval3K.htm, que calcule un determinante de tercer orden.
    Recuerda:
    a b c
    d e f = aei + dch + bfg - gec - hfa - dbi
    g h i
    Compruébalo para el caso:
*/

const determinante =()=>{
    let a = parseInt(prompt('Ingrese el primer coeficiente de a: '), 10)
    let b = parseInt(prompt('Ingrese el segundo coeficiente de b: '), 10)
    let c = parseInt(prompt('Ingrese el tercer coeficiente de c: '), 10)

    let d = parseInt(prompt('Ingrese el primer coeficiente de d: '), 10)
    let e = parseInt(prompt('Ingrese el segundo coeficiente de e: '), 10)
    let f = parseInt(prompt('Ingrese el tercer coeficiente de f: '), 10)

    let g = parseInt(prompt('Ingrese el primer coeficiente de g: '), 10)
    let h = parseInt(prompt('Ingrese el segundo coeficiente de h: '), 10)
    let i = parseInt(prompt('Ingrese el tercer coeficiente de i: '), 10)

    alert(`La matriz:\n${a} ${b} ${c}\n${d} ${e} ${f}\n${g} ${h} ${i}\n
        La determiante de la matriz es: ${((a*e*i)+(d*c*h)+(b*f*g)) - ((g*e*c)+(h*f*a)+(d*b*i))}
    `)
}
determinante();

