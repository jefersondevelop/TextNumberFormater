/*       */
"use strict"

let cardinalInstance = require('./number_to_cardinal_parser')();
const capitalize = require('./utils')


const ordinalCases = [

    // unidades
    ['', 'primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno'],
    // decenas
    ['', 'décimo', 'vigésimo', 'trigésimo', 'cuadragésimo', 'quincuagésimo', 'sexagésimo', 'septuagésimo', 'octagésimo', 'nonagésimo'],
    // centenas
    ['', 'centésimo', 'ducentésimo', 'tricentésimo', 'cuadrigentésimo', 'quingentésimo', 'sexcentésimo', 'septingentésimo', 'octingentésimo', 'noningentésimo'],
    // unidades de millar
    ['', 'milésimo', 'dosmilésimo', 'tresmilésimo ', 'cuatromilésimo', 'cincomilésimo', 'seismilésimo', 'sietemilésimo', 'ochomilésimo', 'nuevemilésimo']

]

const ordinalParser = (number       , gender       )          => {

    if (!number || number === 0) {
        return 'Cero'
    }
    let stringNumber = number.toString();

    let result = '';

    let digits = [...stringNumber];

    if (digits.length > 9) {
        return cardinalInstance.parse(parseInt(stringNumber));
    }

    if (digits.length > 4 && digits.length < 7) {
        const milesimaParte = parseInt(parseInt(stringNumber) / 1000);
        result += cardinalInstance.parse(milesimaParte) + ` `;
        stringNumber = `1${stringNumber.substr(stringNumber.length - 3)}`;
        digits = [...stringNumber];
    }

    if (digits.length > 6 && digits.length < 10) {
        const milesimaParte = parseInt(parseInt(stringNumber) / 1000);
        result += cardinalInstance.parse(milesimaParte) + ` `;
        stringNumber = '1' + stringNumber.substr(stringNumber.length - 3);
        digits = [...stringNumber];
    }

    digits.forEach((digit, i) => {

        let digit_ordinal = ordinalCases[digits.length - i - 1][+digit]

        if (!digit_ordinal) return

        if (gender === 'f') digit_ordinal = digit_ordinal.substr(0, digit_ordinal.length - 1) + 'a'

        result += digit_ordinal + ' ';

    });

    return capitalize(result.toLowerCase()).replace(/\s\s+/g, ' ');

}


module.exports = ordinalParser;