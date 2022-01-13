/* 
    Haz un programa de nombre Eval3A.htm, que calcule el mínimo común múltiplo de dos números
    utilizando la función MCD del Prog049.htm y sabiendo que mcm(x,y) = x*y/MCD(x,y)
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

const minimoComunMultiplo = (a, b) => {
    return (a * b) / MCD(a, b);
};
alert("El MCM es: "+minimoComunMultiplo(x,y));



