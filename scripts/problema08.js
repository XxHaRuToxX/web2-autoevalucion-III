/* 
    Haz un programa de nombre Eval3H.htm, que construya el triángulo de Tartaglia o Pascal de la
    siguiente forma:
    1º) Crea una función que calcule el factorial de un número (consulta el Prog021.htm)
    2º) Crea otra función que permita calcular un número combinatorio
    Recuerda:
    ( m ) = m!/n!(m -n)!
    ( n )
    Utiliza el Prog021.htm del segundo capítulo.
    3º) El triángulo de Tartaglia no es más que los resultados de los números combinatorios:
    4º) El programa nos ha de preguntar de entrada el número de filas del triángulo.
*/

// var salida="";
// const factorial = ()=>{
//     var fact=1;
//     var num;
//     num=prompt("Cálculo del factorial del numero ","");
//     num=parseInt(num,10);
//     for(i=1;i<=num;i++) fact=fact*i;
//     alert("El factorial de "+num+" es "+fact);
// }
// factorial();

var n= parseInt(prompt('Ingrese el numero de filas: '), 10); //número de filas  
 //creamos la matriz bidimensional A(n,n)  
 var A=new Array(n);  
 for (var i=1;i<=n;i++) {  
  A[i] = new Array(n);  
 }  
 //alimentamos la matriz  
 for(i=1;i<=n;i++){  
  for(j=1;j<=i;j++){  
   A[i][j]=combina(i-1,j-1);  
  }  
 }  
 //imprimimos los resultados  
 var texto='';  
 for(i=1;i<=n;i++){  
  for(j=1;j<=i;j++){  
   texto+=A[i][j];  
   texto+= " ";  
  }  
  texto+= "\n";   
 }  
 alert(texto)
 //función que calcula el número combinatorio p sobre q  
 function combina(p,q){  
  return  Math.round(fact(p)/(fact(q)*fact(p-q)));   
 }  
 //función que calcula el factorial  
 function fact(h){  
  var f=1;  
  if (h!==0){  
   for (k=1;k<=h;k++){  
    f*=k;  
   }  
  }  
  return f;  
 }  

