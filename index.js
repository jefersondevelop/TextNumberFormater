var cardinalParse = require('./src/number_to_cardinal_parser');
var ordinalParser = require('./src/number_to_ordinal_parser');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Type an integer number to get cardinal string: ', (number) => {

    if(number.toString().split('.').length > 1 || number.toString().split(',').length > 1){
        console.log("El número ingresado debe ser entero.")
        return
    }

    if(isNaN(parseInt(number)))
        console.log("El número ingresado no es válido.")
    else{
        number = BigInt(number.toString());
        console.log(cardinalParse().parse(number))
        console.log(ordinalParser(number))
    }
    
    readline.close();

    return;
});