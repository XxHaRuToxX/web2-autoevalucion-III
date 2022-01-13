/* 
    Haz un programa de nombre Eval3C.htm, que sirva para sumar o restar dos fracciones y después
    simplifique el resultado.
    Observa:
     a      c     a(mcm(b,d)/b) + c(mcm(b,d)/d)
    ---  + --- = -------------------------------
     b      d         mcm(b,d)

Compruébalo para el caso:
*/

const MCD = (x,y)=>{
    var resto,aux;
    if(x<y){
        aux=x;
        x=y;
        y=aux;
    }
    if ((x%y)==0) resto=y;
    while((x%y) !=0){
        resto=x%y;
        x=y;
        y=resto;
    }
    return resto;
}

const minimoComunMultiplo = (x, y) => {
    return (x * y) / MCD(x, y);
};

a=prompt("Escribe un número a","");
a=parseInt(a,10);
b=prompt("Escribe otro número b","");
b=parseInt(b,10);
c=prompt("Escribe otro número c","");
c=parseInt(c,10);
d=prompt("Escribe otro número d","");
d=parseInt(d,10);

const sumaRestaDeFracciones =(a, b, c, d)=>{
    return `  ${a}        ${c}        ${(((a*(minimoComunMultiplo(b,d)/b))+(c*(minimoComunMultiplo(b,d)/d)))/minimoComunMultiplo(b,d))}\n---- + ---- = ----\n  ${b}        ${d}         `
}

alert('El resultado es: \n' + sumaRestaDeFracciones(a,b,c,d));

