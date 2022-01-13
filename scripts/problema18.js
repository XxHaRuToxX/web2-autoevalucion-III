/* 
    Haz un programa de nombre Eval3R.htm, que cuente el número de vocales que contiene un texto cualquiera.
*/

const contarVocal=(str)=> { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = prompt('Ingrese una letra: ');

const result = contarVocal(string);

alert(`La palabra ${string} tiene ${result} vovales`);

