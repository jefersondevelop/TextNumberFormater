"use strict"

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
// // decenas de millar 
// ['','millonésimo','dosmillonésimo','tresmillonésimo ','cuatromillonésimo','cincomillonésimo','seismillonésimo','sietemillonésimo','ochomillonésimo','nuevemillonésimo']

class OrdinalNumberText {

    getOrdinalNumber = (number, gender) => {


        if(!number || parseInt(number) === 0){
            return 'cero'
        }
      
        let result = ''
      
        // get each digits of number
        let digits = [...number.toString()]
      
        // map each digit to find wich one representation print  

        if(digits.length > 4){
            return number.toString();
        }
      
        digits.forEach((digit, i) => {
      
          // get wich one representation and then number of that representation got
          let digit_ordinal = ordinalCases[digits.length - i - 1][digit]
      
          if (!digit_ordinal) return
      
          if (gender === 'f') digit_ordinal = digit_ordinal.substr(0, [digit_ordinal.length-1]) + 'a'
          
          result += digit_ordinal + ' ';
      
        });
      
        return result.trim();
      
      }


}

module.exports = OrdinalNumberText;