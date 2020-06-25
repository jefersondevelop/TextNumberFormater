/* @flow */
'use-strict'

const cardinalParser = () => {
    const digitDescriptors = [
        ['', '', ''],
        ['Cien ', 'Diez ', 'Uno '],
        ['Doscientos ', 'Veinte ', 'Dos '],
        ['Trescientos ', 'Treinta ', 'Tres '],
        ['Cuatrocientos ', 'Cuarenta ', 'Cuatro '],
        ['Quinientos ', 'Cincuenta ', 'Cinco '],
        ['Seiscientos ', 'Sesenta ', 'Seis '],
        ['Setecientos ', 'Setenta ', 'Siete '],
        ['Ochocientos ', 'Ochenta ', 'Ocho '],
        ['Novecientos ', 'Noventa ', 'Nueve '],
    ]
    const descriptor1To15 = ['', 'Once ', 'Doce ', 'Trece ', 'Catorce ', 'Quince '];

    return {
        parse
    }

    function parse(digits: number) {
        if (digits === 0) {
            return 'Cero';
        }
        let mileMillions = Math.trunc((digits / 1000000000) % 1000);
        let millions = parseInt((digits / 1000000) % 1000);
        let miles = parseInt((digits / 1000) % 1000);
        let units = parseInt(digits % 1000);
        let result = [];

        if (mileMillions > 0) {
            result = result.concat(...generateArrayOfKeyWords(mileMillions, 'Billones ', 'Billon '));
        }

        if (millions > 0) {
            result = result.concat(...generateArrayOfKeyWords(millions, 'Millones ', 'Millon '));
        }

        if (miles > 0) {
            const milesResult = generateArrayOfKeyWords(miles, 'Mil ', 'Mil ');
            if (miles === 1 && mileMillions === 0 && millions === 0) {
                milesResult[2] = '';
            }
            result = result.concat(...milesResult);
        }

        if (units > 0) {
            result = result.concat(...generateArrayOfKeyWords(units, '', ''));
        }

        return result.join("").trim();
    }

    function generateArrayOfKeyWords(digits: number, pluralUnits: string, singularUnit: string): string[] {
        const digitsProcessed = digits.toString().padStart(3, "0").split('');
        const digitRepresentationSplit = getDigitDescriptors(digitsProcessed);
        applySpanishRules(digitsProcessed, digitRepresentationSplit, !pluralUnits);
        digitRepresentationSplit.push(digits > 1 ? pluralUnits : singularUnit);
        return digitRepresentationSplit;
    }

    function applySpanishRules(digits: string[], stringRepresentation: string[], isUnit: boolean): void {
        if (+digits[2] === 1 && !isUnit) {
            stringRepresentation[2] = 'Un ';
        }
        if (+digits[0] === 1 && (+digits[1] > 0 || +digits[2] > 0)) {
            stringRepresentation[0] = 'Ciento ';
        }
        if (+digits[1] > 0 && +digits[1] < 2 && +digits[2] > 0 && +digits[2] <= 5) {
            stringRepresentation[1] = descriptor1To15[digits[2]];
            stringRepresentation[2] = '';
        }
        if (+digits[1] > 0 && +digits[1] < 2 && +digits[2] > 5) {
            stringRepresentation[1] = 'Dieci';
            stringRepresentation[2] = stringRepresentation[2].toLowerCase();
        }
        if (+digits[1] === 2 && +digits[2] > 0) {
            stringRepresentation[1] = 'Veinti';
            stringRepresentation[2] = stringRepresentation[2].toLowerCase();
        }
        if (+digits[1] > 2 && +digits[2] > 0) {
            stringRepresentation[1] += 'y ';
        }
    }

    function getDigitDescriptors(digits: number): string[] {
        return [digitDescriptors[digits[0]][0], digitDescriptors[digits[1]][1], digitDescriptors[digits[2]][2]];
    }
}

module.exports = cardinalParser;

