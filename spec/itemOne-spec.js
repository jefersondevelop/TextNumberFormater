let NumberCardinalText  = require("../itemOne");
let NumberOrdinalText  = require("../itemTwo");

const instanceItemOne = new NumberCardinalText();
const instanceItemTwo = new NumberOrdinalText();

describe("Get string cardinal representation of a number: ",function(){

    it("Should return 'Ciento Veinti y Siete' of 127 cardinal string representation: ", () =>  { 
        
        let result = instanceItemOne.getResult(127);
        expect(result.trimEnd()).toBe("Ciento Veinti y Siete");

    });

    it("Should return 'Cien' of 100 cardinal string representation: ", () =>  { 
        
        let result = instanceItemOne.getResult(100);
        expect(result.replace(" ","")).toBe("Cien");

    });

    it("Should return 'Ciento Veinti y Tres Mil Cuatrocientos Cincuenta y Seis' of 123456 cardinal string representation:: ", () =>  { 
        
        let result = instanceItemOne.getResult(123456);
        expect(result.trimEnd()).toBe("Ciento Veinti y Tres Mil Cuatrocientos Cincuenta y Seis");

    });
    
});

describe("Get string cardinal representation of a number: ",function(){

    it("Should return 'Ciento Vigésimo Septimo ' of 127 ordinal string representation: ", () =>  { 
        
        let result = instanceItemTwo.getResult(127);
        expect(result.trimEnd()).toBe("Ciento Vigésimo Septimo");

    });

    it("Should return 'Cien' of 100 cardinal string representation: ", () =>  { 
        
        let result = instanceItemTwo.getResult(100);
        expect(result.replace(" ","")).toBe("Cien");

    });

    it("Should return 'Ciento Vigésimo Tercero Cuatrocientos Quincuagésimo  Sexto ' of 123456 cardinal string representation:: ", () =>  { 
        
        let result = instanceItemTwo.getResult(123456);
        expect(result.trimEnd()).toBe("Ciento Vigésimo Tercero Cuatrocientos Quincuagésimo  Sexto");

    });
    
});