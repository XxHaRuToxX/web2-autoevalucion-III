/* 
    Haz un programa de nombre Eval3S.htm, que haga lo mismo que el anterior, pero al final el 
    programa nos da el número de “a”, número de “e”, número de “i”, y lo mismo con las “o” y “u”.
*/

let aCont = 0;
let eCont = 0;
let iCont = 0;
let oCont = 0;
let uCont = 0;
let otrosCont = 0;
let string = prompt('Ingrese una palabra o frase para contar las letras individualmente: ').toString();
const getVowels=()=> {
       
    for (let i = 0; i < string.length; i++) {
        switch(string.charAt(i)) {
            case "a":
                aCont++;
                break;

            case "e":
                eCont++;
                break;

            case "i":
                iCont++;
                break;

            case "o":
                oCont++;
                break;

            case "u":
                uCont++;
                break;

            default:
                otrosCont++;
                break;
        }
    }
    return `a = ${aCont}, e = ${eCont}, i = ${iCont}, o = ${oCont}, u = ${uCont}, otros = ${otrosCont}`;
}

alert(`Los vocales contabilizados de "${string}" son: \n${getVowels()}`)

