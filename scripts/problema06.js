/* 
    Haz un programa de nombre Eval3F.htm, que funcione de la siguiente forma:
    - El programa nos pide 5 valores.
    - El programa calcula la media aritmética (función con retorno de parámetro).
    - El programa calcula las desviaciones respecto a la media
    - El programa calcula la desviación media (llamada a la misma función de antes).
    - El programa calcula la desviación típica (llamada a la misma función de antes).
    Compruébalo para el caso:
*/

var x=new Array(5);
var sum=0;
var med;
var des=new Array(5);
var sum1=0;
var sum2=0;
var desmed,vari,dt;
var salida=`VALORES:\n`;
var salida1="DESVIACIONES RESPECTO A LA MEDIA:\n";

// let valor1 = parseInt(prompt('Inserte el valor 1:',''), 10);
// let valor2 = parseInt(prompt('Inserte el valor 2:',''), 10);
// let valor3 = parseInt(prompt('Inserte el valor 3:',''), 10);
// let valor4 = parseInt(prompt('Inserte el valor 4:',''), 10);
// let valor5 = parseInt(prompt('Inserte el valor 5:',''), 10);

for(i=0;i<5;i++){
    num=parseFloat(prompt("Escribe un valor de la serie ("+(i+1)+"º):",""));
    x[i]=num;
    salida=salida+x[i]+" - ";
    sum=sum+x[i];
}

med=sum/5;

for(i=0;i<5;i++){
    des[i]=Math.abs(x[i]-med);
    salida1=salida1+des[i]+" - ";
    sum1=sum1+des[i];
    sum2=sum2+(des[i]*des[i]);
}

desmed=sum1/5;

vari=sum2/5;

dt=Math.sqrt(vari);

alert(salida+"\n"+"MEDIA ARITMÉTICA = "+med+"\n"+salida1+"\n"+"DESVIACIÓN MEDIA ="+desmed+"\nVARIANZA ="+vari+"\nDESVIACIÓN TÍPICA = "+dt);

