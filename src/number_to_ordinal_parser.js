/* @flow */
"use strict"

let cardinalInstance = require('./number_to_cardinal_parser')();
const capitalize = require('./utils')


const ordinalCases = [

  // unidades
  ['','primero','segundo','tercero','cuarto','quinto','sexto','séptimo','octavo','noveno'],
  // decenas
  ['','décimo','vigésimo','trigésimo','cuadragésimo','quincuagésimo','sexagésimo','septuagésimo','octagésimo','nonagésimo'],
  // centenas
  ['','centésimo','ducentésimo','tricentésimo','cuadrigentésimo','quingentésimo','sexcentésimo','septingentésimo','octingentésimo','noningentésimo'],
  // unidades de millar
  ['','milésimo','dosmilésimo','tresmilésimo ','cuatromilésimo','cincomilésimo','seismilésimo','sietemilésimo','ochomilésimo','nuevemilésimo']
  
]

const ordinalParser = (number:number, gender:string) => {


  if(!number || number === 0){
      return 'Cero'
  }

  let result = ''

  // get each digits of number
  let digits = [...number.toString()]

  // map each digit to find wich one representation print  

  if(digits.length > 9){
      return cardinalInstance.parse(number);
  }
  
  if(digits.length > 4 && digits.length < 7){
    const milesimaparte = parseInt(number/1000);
    result += cardinalInstance.parse(milesimaparte) + ` `;
    number = '1' + number.toString().substr(number.toString().length - 3);
    digits = [...number];
  }

  if(digits.length > 6 && digits.length < 10){
    const milesimaparte = parseInt(number/1000);
    result += cardinalInstance.parse(milesimaparte) + ` `;
    number = '1' + number.toString().substr(number.toString().length - 3);
    digits = [...number];
  }

  digits.forEach((digit, i) => {

    // get wich one representation and then number of that representation got
    let digit_ordinal = ordinalCases[digits.length - i - 1][digit]

    if (!digit_ordinal) return

    if (gender === 'f') digit_ordinal = digit_ordinal.substr(0, [digit_ordinal.length-1]) + 'a'
    
    result += digit_ordinal + ' ';

  });
  
  return capitalize(result.toLowerCase()).replace(/\s\s+/g, ' ');
  
}


module.exports = ordinalParser;