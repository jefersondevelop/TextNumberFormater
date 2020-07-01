/*       */
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
    const dividerUnits = [
        BigInt("1000000000000000000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000000"),
        BigInt("1000000000000000000000000000000"),
        BigInt("1000000000000000000000000000"),
        BigInt("1000000000000000000000000"),
        BigInt("1000000000000000000000"),
        BigInt("1000000000000000000"),
        BigInt("1000000000000000"),
        BigInt("1000000000000"),
        BigInt("1000000000"),
        BigInt("1000000"),
        BigInt("1000"),
        BigInt("1")];
    const denominations = [
        ['Decillones ', 'Decillon '],
        ['Mil ', 'Mil '],
        ['Nonillones ', 'Nonillon '],
        ['Mil ', 'Mil '],
        ['Octillones ', 'Octillon '],
        ['Mil ', 'Mil '],
        ['Septillones ', 'Septillon '],
        ['Mil ', 'Mil '],
        ['Sextillones ', 'Sextillon '],
        ['Mil ', 'Mil '],
        ['Quintillones ', 'Quintillon '],
        ['Mil ', 'Mil '],
        ['Cuatrillones ', 'Cuatrillon '],
        ['Mil ', 'Mil '],
        ['Trillones ', 'Trillon '],
        ['Mil ', 'Mil  '],
        ['Billones ', 'Billon '],
        ['Mil ', 'Mil  '],
        ['Millones ', 'Millon '],
        ['Mil ', 'Mil '],
        ['', '']];
    return {
        parse
    }

    function parse(digits        , raw         )         {
        if (digits == 0) {
            return 'Cero';
        }
        let result = [];
        dividerUnits.forEach((divider, index) => {
            const value = (BigInt(digits) / BigInt(divider)) % BigInt("1000");
            if (digits >= BigInt("1000000000000")) {
                const valueBig = (BigInt(digits) / divider) % BigInt("1000");
                if (valueBig > 0) {
                    const tempResult = parse(valueBig, true);
                    if (valueBig > BigInt("1")) {
                        tempResult[3] = denominations[index][0];
                    } else if (valueBig === BigInt("1")) {
                        tempResult[2] = "Un "
                        tempResult[3] = denominations[index][1];
                    }
                    result = result.concat(...tempResult);
                }
            } else {
                if (value > 0) {
                    const keyWords = generateArrayOfKeyWords(value, denominations[index][0], denominations[index][1]);
                    if (keyWords.join('') === 'Un Mil ') {
                        keyWords[2] = '';
                    }
                    result = result.concat(...keyWords);
                }
            }
        });
        return raw ? result : result.join("").trim();
    }

    function generateArrayOfKeyWords(digits        , pluralUnits        , singularUnit        )           {
        const digitsProcessed = digits.toString().padStart(3, "0").split('');
        const digitRepresentationSplit = getDigitDescriptors(digitsProcessed);
        applySpanishRules(digitsProcessed, digitRepresentationSplit, !pluralUnits);
        digitRepresentationSplit.push(digits > 1 ? pluralUnits : singularUnit);
        return digitRepresentationSplit;
    }

    function applySpanishRules(digits          , stringRepresentation          , isUnit         )       {
        if (+digits[2] === 1 && !isUnit) {
            stringRepresentation[2] = 'Un ';
        }
        if (+digits[0] === 1 && (+digits[1] > 0 || +digits[2] > 0)) {
            stringRepresentation[0] = 'Ciento ';
        }
        if (+digits[1] > 0 && +digits[1] < 2 && +digits[2] > 0 && +digits[2] <= 5) {
            stringRepresentation[1] = descriptor1To15[+digits[2]];
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

    function getDigitDescriptors(digits          )           {
        return [digitDescriptors[+digits[0]][0], digitDescriptors[+digits[1]][1], digitDescriptors[+digits[2]][2]];
    }
}

module.exports = cardinalParser;


console.log(cardinalParser().parse("100"));
console.log(cardinalParser().parse("1000000000000000000"));
console.log(cardinalParser().parse("1000000000000000000000000"));
console.log(cardinalParser().parse("1000000000000000000000000000000"));
console.log(cardinalParser().parse("1000000000000000000000000000000000000"));
