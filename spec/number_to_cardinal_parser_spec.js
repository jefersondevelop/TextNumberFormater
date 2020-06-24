let NumberCardinalText = require("../src/itemOne");
let NumberOrdinalText = require("../src/itemTwo");
const cardinalParser = require('../lib/number_to_cardinal_parser')();
const instanceItemOne = new NumberCardinalText();
const instanceItemTwo = new NumberOrdinalText();


const cardinal_assertions = [
    [0, "Cero"],
    [1, "Uno"],
    [7, "Siete"],
    [11, "Once"],
    [16, "Dieciséis"],
    [17, "Diecisiete"],
    [21, "Veintiún"],
    [22, "Veintidós"],
    [27, "Veintisiete"],
    [30, "Treinta"],
    [31, "Treinta y Uno"],
    [90, "Noventa"],
    [99, "Noventa y Nueve"],
    [101, "Ciento Uno"],
    [107, "Ciento Siete"],
    [111, "Ciento Once"],
    [117, "Ciento Diecisiete"],
    [121, "Ciento Veintiún"],
    [127, "Ciento Veintisiete"],
    [130, "Ciento Treinta"],
    [500, "Quinientos"],
    [1000, "Un Mil"],
    [1001, "Mil Uno"],
    [1007, "Mil Siete"],
    [1011, "Mil Once"],
    [1017, "Mil Diecisiete"],
    [1021, "Mil Veintiún"],
    [1027, "Mil Veintisiete"],
    [1030, "Mil Treinta"],
    [1101, "Mil Ciento Uno"],
    [1107, "Mil Ciento Siete"],
    [1111, "Mil Ciento Once"],
    [1117, "Mil Ciento Diecisiete"],
    [1121, "Mil Ciento Veintiún"],
    [1127, "Mil Ciento Veintisiete"],
    [1130, "Mil Ciento Treinta"],
    [1500, "Mil Quinientos"],
    [99000, "Noventa y Nueve Mil"],
    [99001, "Noventa y Nueve Mil Uno"],
    [100500, "Cien Mil Quinientos"],
    [100501, "Cien Mil Quinientos Uno"],
    [101500, "Ciento Un Mil Quinientos"],
    [107500, "Ciento Siete Mil Quinientos"],
    [111500, "Ciento Once Mil Quinientos"],
    [117500, "Ciento Diecisiete Mil Quinientos"],
    [121500, "Ciento Veintiún Mil Quinientos"],
    [127500, "Ciento Veintisiete Mil Quinientos"],
    [127521, "Ciento Veintisiete Mil Quinientos Veintiún"],
    [130500, "Ciento Treinta Mil Quinientos"],
    [1000000, "Un Millón"],
];

// describe("Get string cardinal representation of a number: ", function () {
//     cardinal_assertions.forEach((assertion) => {
//         it(`converts the number ${assertion[0]}`, () => {
//             const actual = instanceItemOne.getResult(assertion[0]).trim();
//             const expected = assertion[1];
//             expect(actual).toEqual(expected);
//         });
//     });
// });

describe("Get string cardinal representation of a number refactor: ", function () {
    cardinal_assertions.forEach((assertion) => {
        it(`converts the number ${assertion[0]}`, () => {
            const actual = cardinalParser.parse(assertion[0]).trim();
            const expected = assertion[1];
            expect(actual).toEqual(expected);
        });
    });
});
