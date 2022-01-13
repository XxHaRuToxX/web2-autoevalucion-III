/* 
    Haz un programa de nombre Eval3I.htm, tal que:
    - El programa nos pregunta cuántas multiplicaciones queremos hacer.
    - El programa nos las pregunta aleatoriamente.
    - Al final el programa nos da la nota cualitativa (función del Prog049f.htm).
    Repasa el segundo capítulo.
*/

const multiplicarAleatoriamente = ()=>{
    let numeroDeVeces = parseInt(prompt('Ingrese el numero de multiplicaciones que desea hacer: '), 10)
    let respuesta;
    let verdadero = 0;
    let falso = 0;
    for(let i = 0; i < numeroDeVeces; i++){
        let multiplicando = parseInt(Math.random()*10);
        let multiplicador = parseInt(Math.random()*10);
        respuesta = parseInt(prompt(`${i+1}.- ¿Cuanto es ${multiplicando} * ${multiplicador}?`));
        if(respuesta === (multiplicando*multiplicador)){
            verdadero = verdadero + 1;
        }else{
            falso = falso + 1;
        }
    }
    // alert('Usted respondio ' + verdadero + ' correctamente y ' + falso + ' incorrectamente');
    return verdadero;
}


const cuali=()=>{
    switch(multiplicarAleatoriamente()){
        case 0:
        case 1:
            return "Muy Deficiente";
            break;
        case 2:
        case 3:
            return "Deficiente";
            break;
        case 4:
            return "Insuficiente";
            break;
        case 5:
            return "Suficiente";
            break;
        case 6:
            return "Bien";
            break;
        case 7:
        case 8:
            return "Notable";
            break;
        case 9:
            return "Excelente";
            break;
        case 10:
            return "Matricula de Honor";
            break;
    }
}

alert(`Usted tine un nivel ${cuali()}`)

