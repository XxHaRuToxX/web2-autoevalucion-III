/* 
    Haz un programa de nombre Eval3Q.htm, que calcule la raíz cuarta de un número, utilizando una función.
*/

let numero = parseInt(prompt('Ingrese el numero a calcular la raiz cuarta: '), 10);
const raizCuarta = (n) => {
    return Math.pow(n, 1/4);
}

alert(`La raiz cuarta del numero ${numero} es ${raizCuarta(numero)}`);

