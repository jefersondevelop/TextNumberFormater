/*       */
'use-strict'

const capitalize = require('./utils')
const cardinalParser = () => {

    return {
        parse
    }

    function parse(digits        )         {
        return capitalize(processNumberToReturn(digits).toLowerCase());
    }

    function processNumberToReturn(digits        )         {
        let result = '';

        if (digits === 0) {
            result += 'Cero ';
            return result;
        }

        let units = parseInt(digits % 1000);
        let miles = parseInt((digits / 1000) % 1000);
        let millions = parseInt((digits / 1000000) % 1000);
        let mileMillions = Math.trunc((digits / 1000000000) % 1000);

        if (mileMillions > 0) result += getCardinalString(mileMillions, result.length > 0) + 'Mil ';
        if (millions > 0) result += millions === 1 ? 'Un ' : getCardinalString(millions, result.length > 0);

        if (mileMillions === 0 && millions === 1) result += 'Millón ';
        else if (mileMillions > 0 || millions > 0) result += 'Millones ';

        if (miles > 0) {
            result += miles === 1 ? 'Un Mil ' : getCardinalString(miles, result.length > 0) + 'Mil ';
        }
        if (miles === 1 && units > 0 && result.length > 0 && result.includes('Mil ')) result = result.split('Un ')[1] ? result.split('Un ')[1] : result.split('Uno ')[1] ? result.split('Uno ')[1] : result.split('Un ')[1];


        if (units > 0) {
            result += units === 1 ? 'Uno' : getCardinalString(units, result.length > 0);

        }

        return result;

    }

    function getCardinalString(digits        , separator        )         {
        let digitStringRepresentation = '';
        const hundreds = parseInt(digits / 100);
        const tens = parseInt((digits % 100) / 10);
        const units = parseInt(digits % 10);

        if (hundreds === 1 && tens === 0 && units === 0) {
            return 'Cien ';
        }

        // if (hundreds === 1 && tens === 0 && units === 0) {
        //     return 'Cien ';
        // }

        digitStringRepresentation += getHundredsCardinalString(hundreds);

        digitStringRepresentation += getTensCardinalString(tens, units);

        if (tens === 1 && units < 5) {
            return digitStringRepresentation;
        }

        if (tens > 2 && units > 0 && !(digitStringRepresentation.includes('Veinti') || digitStringRepresentation.includes('Dieci'))) {
            digitStringRepresentation += (separator) ? 'y ' : 'y ';
        }

        digitStringRepresentation += getUnitsCardinalString(units, tens, hundreds, separator);

        return digitStringRepresentation;


    }

    function getHundredsCardinalString(hundreds        )         {
        let hundredsCardinalString;
        switch (hundreds) {
            case 0:
                hundredsCardinalString = '';
                break;
            case 1:
                hundredsCardinalString = 'Ciento ';
                break;
            case 2:
                hundredsCardinalString = 'Doscientos ';
                break;

            case 3:
                hundredsCardinalString = 'Trescientos ';
                break;

            case 4:
                hundredsCardinalString = 'Cuatrocientos ';
                break;

            case 5:
                hundredsCardinalString = 'Quinientos ';
                break;

            case 6:
                hundredsCardinalString = 'Seiscientos ';
                break;

            case 7:
                hundredsCardinalString = 'Setecientos ';
                break;

            case 8:
                hundredsCardinalString = 'Ochocientos ';
                break;

            case 9:
                hundredsCardinalString = 'Novecientos ';
                break;
        }
        return hundredsCardinalString;
    }

    function getTensCardinalString(tens        , units        )         {
        let tensCardinalString = '';
        switch (tens) {
            case 0:
                tensCardinalString = '';
                break;
            case 1:
                if (units === 0) {
                    tensCardinalString += 'Diez ';
                } else if (units === 1) {
                    tensCardinalString += 'Once ';
                } else if (units === 2) {
                    tensCardinalString += 'Doce ';
                } else if (units === 3) {
                    tensCardinalString += 'Trece ';
                } else if (units === 4) {
                    tensCardinalString += 'Catorce ';
                } else if (units === 5) {
                    tensCardinalString += 'Quince ';
                } else {
                    tensCardinalString += 'Dieci';
                }
                break;
            case 2:
                if (units === 0) {
                    tensCardinalString += 'Veinte ';
                } else {
                    tensCardinalString += 'Veinti';
                }
                break;
            case 3:
                tensCardinalString += 'Treinta ';
                break;
            case 4:
                tensCardinalString += 'Cuarenta ';
                break;
            case 5:
                tensCardinalString += 'Cincuenta ';
                break;
            case 6:
                tensCardinalString += 'Sesenta ';
                break;
            case 7:
                tensCardinalString += 'Setenta ';
                break;
            case 8:
                tensCardinalString += 'Ochenta ';
                break;
            case 9:
                tensCardinalString += 'Noventa ';
                break;
        }
        return tensCardinalString;
    }

    function getUnitsCardinalString(units        , tens        , hundreds        , separator        )         {
        let unitsCardinalString = '';
        switch (units) {
            case 0:
                break;
            case 1:
                if (tens === 2) {
                    unitsCardinalString += 'Ún ';
                } else if (hundreds > 0) {
                    unitsCardinalString += (separator) ? 'Uno ' : 'Un ';
                } else {
                    unitsCardinalString += (!separator) ? 'Uno ' : 'Un ';
                }
                break;
            case 2:
                if (tens === 2 && !separator) {
                    unitsCardinalString += 'Dós ';
                } else{
                    unitsCardinalString += 'Dos ';
                }
                break;
            case 3:
                unitsCardinalString += 'Tres ';
                break;
            case 4:
                unitsCardinalString += 'Cuatro ';
                break;
            case 5:
                unitsCardinalString += 'Cinco ';
                break;
            case 6:
                unitsCardinalString += 'Séis ';
                break;
            case 7:
                unitsCardinalString += 'Siete ';
                break;
            case 8:
                unitsCardinalString += 'Ocho ';
                break;
            case 9:
                unitsCardinalString += 'Nueve ';
                break;
        }
        return unitsCardinalString;
    }
}


module.exports = cardinalParser;