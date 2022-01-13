/* 
    Haz un programa de nombre Eval3G.htm, que transforma un número en base 10 a base 4 y 5.
    Repasa el primer capítulo.
    Compruébalo para el caso:
*/

let numero = parseInt(prompt('Ingrese el numero en base 10: '),10)

const base4 = ()=>{
    return numero.toString(4)
}

const base5 = ()=>{
    return numero.toString(5)
}

alert(`el numero a base 4 es ${base4()} y a base 5 es ${base5()}`)

