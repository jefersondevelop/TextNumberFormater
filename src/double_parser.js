const ordinalParser = require('../lib/number_to_ordinal_parser');
const cardinalParser = require('../lib/number_to_cardinal_parser')();

const doubleValueParser = (digits) => {
    const splitDigits = digits.split('\.');
    const result = [cardinalParser.parse(splitDigits[1]) , ordinalParser(splitDigits[0])];
    return result.join(' y ');
}

module.exports = doubleValueParser;