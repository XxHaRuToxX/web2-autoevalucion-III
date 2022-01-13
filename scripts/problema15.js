/* 
    Haz un programa de nombre Eval3O.htm, que escriba un número en base 2 o 3 en base 10.
    Repasa el primer capítulo
*/

let numero = prompt('Ingrese el numero en base 2 o 3: ')

const base2 = ()=>{
    return parseInt(numero, 2)
}
const base3 = ()=>{
    return parseInt(numero, 3)
}

alert(`el numero a base 10 de binario ${base2()} y de ternario ${base3()}`)

