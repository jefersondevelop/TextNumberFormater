var NumberCardinalText = require('./itemOne');
var NumberOrdinalText = require('./itemTwo');

let cardinalInstance = new NumberCardinalText();
let ordinalInstance = new NumberOrdinalText();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Type an integer number to get cardinal string: ', (number) => {

    if(number.toString().split('.').length > 1 || number.toString().split(',').length > 1){
        console.log("El número ingresado debe ser entero.")
        return
    }
    
    number = parseInt(number);

    if(isNaN(number))
        console.log("El número ingresado no es válido.")
    else{
        console.log(cardinalInstance.getResult(number));
        console.log(ordinalInstance.getResult(number));
    }
    
    readline.close();

    return;
});

