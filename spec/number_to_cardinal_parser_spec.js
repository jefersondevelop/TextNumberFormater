const cardinalParser = require('../lib/number_to_cardinal_parser')();

const cardinal_assertions = [
    ["0", "Cero"],
    ["1", "Uno"],
    ["7", "Siete"],
    ["11", "Once"],
    ["16", "Dieciseis"],
    ["17", "Diecisiete"],
    ["21", "Veintiuno"],
    ["22", "Veintidos"],
    ["27", "Veintisiete"],
    ["30", "Treinta"],
    ["31", "Treinta y Uno"],
    ["90", "Noventa"],
    ["99", "Noventa y Nueve"],
    ["101", "Ciento Uno"],
    ["107", "Ciento Siete"],
    ["111", "Ciento Once"],
    ["117", "Ciento Diecisiete"],
    ["121", "Ciento Veintiuno"],
    ["127", "Ciento Veintisiete"],
    ["130", "Ciento Treinta"],
    ["500", "Quinientos"],
    ["1000", "Mil"],
    ["1001", "Mil Uno"],
    ["1007", "Mil Siete"],
    ["1011", "Mil Once"],
    ["1017", "Mil Diecisiete"],
    ["1021", "Mil Veintiuno"],
    ["1027", "Mil Veintisiete"],
    ["1030", "Mil Treinta"],
    ["1101", "Mil Ciento Uno"],
    ["1107", "Mil Ciento Siete"],
    ["1111", "Mil Ciento Once"],
    ["1117", "Mil Ciento Diecisiete"],
    ["1121", "Mil Ciento Veintiuno"],
    ["1127", "Mil Ciento Veintisiete"],
    ["1130", "Mil Ciento Treinta"],
    ["1500", "Mil Quinientos"],
    ["99000", "Noventa y Nueve Mil"],
    ["99001", "Noventa y Nueve Mil Uno"],
    ["100500", "Cien Mil Quinientos"],
    ["100501", "Cien Mil Quinientos Uno"],
    ["101500", "Ciento Un Mil Quinientos"],
    ["107500", "Ciento Siete Mil Quinientos"],
    ["111500", "Ciento Once Mil Quinientos"],
    ["117500", "Ciento Diecisiete Mil Quinientos"],
    ["121500", "Ciento Veintiun Mil Quinientos"],
    ["127500", "Ciento Veintisiete Mil Quinientos"],
    ["127521", "Ciento Veintisiete Mil Quinientos Veintiuno"],
    ["130500", "Ciento Treinta Mil Quinientos"],
    ["1000000", "Un Millon"],
    ["2000000", "Dos Millones"],
    ["3000000", "Tres Millones"],
    ["24081994", 'Veinticuatro Millones Ochenta y Un Mil Novecientos Noventa y Cuatro'],
    ["433", 'Cuatrocientos Treinta y Tres'],
    ["1994", 'Mil Novecientos Noventa y Cuatro'],
    ["156892", 'Ciento Cincuenta y Seis Mil Ochocientos Noventa y Dos'],
    ["2345124", 'dos millones trescientos cuarenta y cinco mil ciento veinticuatro'],
    ["24081994", 'veinticuatro millones ochenta y un mil novecientos noventa y cuatro'],
    ["45", 'cuarenta y cinco'],
    ["6", 'seis'],
    ["567555", 'quinientos sesenta y siete mil quinientos cincuenta y cinco'],
    ["3001", 'tres mil uno'],
    ["120000000", 'ciento veinte millones'],
    ["9999999999999", 'nueve billones novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve'],
];

describe("Get string cardinal representation of a number refactor: ", function () {
    cardinal_assertions.forEach((assertion) => {
        it(`converts the number ${assertion[0]}`, () => {
            const actual = cardinalParser.parse(assertion[0]);
            const expected = assertion[1];
            console.log(actual.toLowerCase())
            expect(actual.toLowerCase()).toEqual(expected.toLowerCase());
        });
    });
});
