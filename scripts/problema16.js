/* 
    Haz un programa de nombre Eval3P.htm, que calcule los 50 primeros términos de 
    la sucesión de termino general: (3n + 1) / ( 2n – 1)
*/

let numeros = new Array(5);
let num;
let i;
let resultados = new Array(5);
const calcularTerminos = ()=>{

    for(i = 1; i<=5; i++){
        // num=alert("Cuando N = ("+(i)+"):","");
        // numeros[i]=num;
        resultados[i] = (3*[i] + 1)/(2*[i] - 1);
    }
    alert(`Los resultados son: \n${resultados}`)
    
}
calcularTerminos();



