
const ordinalParser = require('../lib/number_to_ordinal_parser');

const cardinal_assertions = [
    [0, "Cero"],
    [1, "Primero"],
    [7, "Séptimo"],
    [11, "Décimo Primero"],
    [16, "Décimo Sexto"],
    [17, "Décimo Séptimo"],
    [21, "Vigésimo Primero"],
    [22, "Vigésimo Segundo"],
    [27, "Vigésimo Séptimo"],
    [30, "Trigésimo"],
    [31, "Trigésimo Primero"],
    [90, "Nonagésimo"],
    [99, "Nonagésimo Noveno"],
    [101, "Centésimo Primero"],
    [107, "Centésimo Séptimo"],
    [111, "Centésimo Décimo Primero"],
    [117, "Centésimo Décimo Séptimo"],
    [121, "Centésimo Vigésimo Primero"],
    [127, "Centésimo Vigésimo Séptimo"],
    [130, "Centésimo Trigésimo"],
    [500, "Quingentésimo"],
    [1000, "Milésimo"],
    [1001, "Milésimo Primero"],
    [1007, "Milésimo Séptimo"],
    [1011, "Milésimo Décimo Primero"],
    [1017, "Milésimo Décimo Séptimo"],
    [1021, "Milésimo Vigésimo Primero"],
    [1027, "Milésimo Vigésimo Séptimo"],
    [1030, "Milésimo Trigésimo"],
    [1101, "Milésimo Centésimo Primero"],
    [1107, "Milésimo Centésimo Séptimo"],
    [1111, "Milésimo Centésimo Décimo Primero"],
    [1117, "Milésimo Centésimo Décimo Séptimo"],
    [1121, "Milésimo Centésimo Vigésimo Primero"],
    [1127, "Milésimo Centésimo Vigésimo Séptimo"],
    [1130, "Milésimo Centésimo Trigésimo"],
    [1500, "Milésimo Quingentésimo"],
    [99000, "Noventa y Nueve Milésimo"],
    [99001, "Noventa y Nueve Milésimo Primero"],
    [100500, "Cien Milésimo Quingentésimo"],
    [100501, "Cien Milésimo Quingentésimo Primero"],
    [101500, "Ciento Uno Milésimo Quingentésimo"],
    [107500, "Ciento Siete Milésimo Quingentésimo"],
    [111500, "Ciento Once Milésimo Quingentésimo"],
    [117500, "Ciento Diecisiete Milésimo Quingentésimo"],
    [121500, "Ciento Veintiuno Milésimo Quingentésimo"],
    [127500, "Ciento Veintisiete Milésimo Quingentésimo"],
    [127521, "Ciento Veintisiete Milésimo Quingentésimo Vigésimo Primero"],
    [130500, "Ciento Treinta Milésimo Quingentésimo"],
    [1000000, "Mil Milésimo"],
    [2000000, "Dos Mil Milésimo"],
    [3000000, "Tres Mil Milésimo"],
];

describe("Get string ordinal representation of a number refactor: ", function () {
    cardinal_assertions.forEach((assertion) => {
        it(`converts the number ${assertion[0]}`, () => {
            const actual = ordinalParser(assertion[0]).trim();
            const expected = assertion[1];
            expect(actual).toEqual(expected);
        });
    });
});
