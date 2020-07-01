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

    function getNOfZeros(n){
        let result = 1;
        for(var i=1; i<=n; i++){
            result*=10;
        }
        return result;
    }

    function parse(digits) {
        if (digits === 0) {
            return 'Cero';
        }
        let mileSextillions = Math.trunc((digits / getNOfZeros(39)) % 1000); // 39 zeros
        let sextillions = Math.trunc((digits / getNOfZeros(36)) % 1000); // 36 zeros
        let mileQuintillions = Math.trunc((digits / getNOfZeros(33)) % 1000); // 33 zeros
        let quintillions = Math.trunc((digits / getNOfZeros(30)) % 1000); // 30 zeros
        let mileCuatrillions = Math.trunc((digits / getNOfZeros(27)) % 1000); // 27 zeros
        let cuatrillions = Math.trunc((digits / getNOfZeros(24)) % 1000); // 24 zeros
        let milTrillions = Math.trunc((digits / getNOfZeros(21)) % 1000); // 21 zeros
        let trillions = Math.trunc((digits / getNOfZeros(18)) % 1000); // 18 zeros
        let milBillions = Math.trunc((digits / getNOfZeros(15)) % 1000); // 15 zeros
        let billions = Math.trunc((digits / getNOfZeros(12)) % 1000); // 12 zeros
        let mileMillions = Math.trunc((digits / getNOfZeros(9)) % 1000); // 9 zeros
        let millions = parseInt((digits / getNOfZeros(6)) % 1000); // 6 zeros
        let miles = parseInt((digits / getNOfZeros(3)) % 1000); // 3 zeros
        let units = parseInt(digits % 1000);
        let result = [];

        if(mileSextillions > 0){
            result = result.concat(...generateArrayOfKeyWords(mileSextillions, 'Mil Sextillones ', 'Mil Sextillon '));
        }

        if(sextillions > 0){
            result = result.concat(...generateArrayOfKeyWords(sextillions, 'Sextillones ', 'Sextillon '));
        }

        if(quintillions > 0){
            result = result.concat(...generateArrayOfKeyWords(mileQuintillions, 'Mil Quintillones ', 'Mil Quintillon '));
        }

        if(quintillions > 0){
            result = result.concat(...generateArrayOfKeyWords(quintillions, 'Quintillones ', 'Quintillon '));
        }

        if(mileCuatrillions > 0){
            result = result.concat(...generateArrayOfKeyWords(mileCuatrillions, 'Mil Cuatrillones ', 'Mil Cuatrillon '));
        }
        
        if(cuatrillions > 0){
            result = result.concat(...generateArrayOfKeyWords(cuatrillions, 'Cuatrillones ', 'Cuatrillon '));
        }

        if(milTrillions > 0){
            result = result.concat(...generateArrayOfKeyWords(milTrillions, 'Mil Trillones ', 'Mil Trillon '));
        }

        if(trillions > 0){
            result = result.concat(...generateArrayOfKeyWords(trillions, 'Trillones ', 'Trillon '));
        }

        if(milBillions > 0){
            result = result.concat(...generateArrayOfKeyWords(milBillions, 'Mil Billones ', 'Mil Billon '));
        }

        if(billions > 0){
            result = result.concat(...generateArrayOfKeyWords(billions, 'Billones ', 'Billon '));
        }

        if (mileMillions > 0) {
            result = result.concat(...generateArrayOfKeyWords(mileMillions, 'Millardos ', 'Millardo '));
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

    function generateArrayOfKeyWords(digits, pluralUnits, singularUnit) {
        const digitsProcessed = digits.toString().padStart(3, "0").split('');
        const digitRepresentationSplit = getDigitDescriptors(digitsProcessed);
        applySpanishRules(digitsProcessed, digitRepresentationSplit, !pluralUnits);
        digitRepresentationSplit.push(digits > 1 ? pluralUnits : singularUnit);
        return digitRepresentationSplit;
    }

    function applySpanishRules(digits, stringRepresentation, isUnit) {
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

    function getDigitDescriptors(digits) {
        return [digitDescriptors[digits[0]][0], digitDescriptors[digits[1]][1], digitDescriptors[digits[2]][2]];
    }
}

module.exports = cardinalParser;

