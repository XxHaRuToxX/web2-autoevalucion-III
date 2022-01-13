/* 
    Haz un programa de nombre Eval3B.htm, que sirva para simplificar una fracción numérica, debes
    utilizar la función MCD del ejercicio anterior.
    Observa: a          a/MCD(a,b)
            ----- = -----------------
             b          b/MCD(a,b)
    Comprueba el funcionamiento del programa para el
    caso:
*/

var x,y;
x=prompt("Escribe un número","");
x=parseInt(x,10);
y=prompt("Escribe otro número","");
y=parseInt(y,10);
const MCD = (a,b)=>{
    var resto,aux;
    if(a<b){
        aux=a;
        a=b;
        b=aux;
    }
    if ((a%b)==0) resto=b;
    while((a%b) !=0){
        resto=a%b;
        a=b;
        b=resto;
    }
    return resto;
}

const simplificarFraccion = (a,b)=>{
    return`  ${a/MCD(a,b)}\n-----\n  ${b/MCD(a,b)}`
}

alert(`La fraccion simplificada es: \n${simplificarFraccion(x,y)}`)

