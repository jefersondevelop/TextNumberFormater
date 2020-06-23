"use-strict"

class NumberCardinalText {

    // Function to process the cardinal number got

    processNumberToReturn(cardinal){
        
        let result = ``;

        // verify if number is zero

        if (cardinal == 0) {
            result+="Cero ";
            return result.toString();
        }

        // Get units, miles, millions and mile of millions of cardinal number got

        let units = parseInt(cardinal % 1000);
        let miles = parseInt((cardinal / 1000) % 1000);
        let millions = parseInt((cardinal / 1000000) % 1000);
        let mileMillions = Math.trunc((cardinal / 1000000000) % 1000);
        
        // Parse part by part checking units, miles, miles and mile of millions of cardinal number got

        if (mileMillions > 0) result += this.getTexto(mileMillions).toString() + "";
        if (millions > 0) result += this.getTexto(millions).toString();

        if (mileMillions == 0 && millions == 1) result+="";
        else if (mileMillions > 0 || millions > 0) result+="";

        if (miles > 0) result += this.getTexto(miles).toString() + "";
        if (units > 0) result += this.getTexto(units).toString();

        return result;

    }

    // Method to get the rest of string of cardinal number got

    getTexto(n){

        let result = '';

        let centenas = n / 100;
        let decenas = (n % 100) / 10;
        let unidades = (n % 10);

        switch (parseInt(centenas)) {
            case 0:
                break;
            case 1:
                if (decenas == 0 && unidades == 0) {
                    result+="Cien ";
                    return result;
                } else result+="Ciento ";
                break;
            case 2:
                result+="Doscientos ";
                break;
            case 3:
                result+="Trescientos ";
                break;
            case 4:
                result+="Cuatrocientos ";
                break;
            case 5:
                result+="Quinientos ";
                break;
            case 6:
                result+="Seiscientos ";
                break;
            case 7:
                result+="Setecientos ";
                break;
            case 8:
                result+="Ochocientos ";
                break;
            case 9:
                result+="Novecientos ";
                break;
        }

        switch (parseInt(decenas)) {
            case 0:
                break;
            case 1:
                if (unidades == 0) {
                    result+="Décimo ";
                    return result;
                } else if (unidades == 1) {
                    result+="Undécimo ";
                    return result;
                } else if (unidades == 2) {
                    result+="Duodécimo ";
                    return result;
                } else if (unidades == 3) {
                    result+="Décimo tercero ";
                    return result;
                } else if (unidades == 4) {
                    result+="Décimo cuarto ";
                    return result;
                } else if (unidades == 5) {
                    result+="Décimo quinto ";
                    return result;
                } else result+="Décimo sexto ";
                break;
            case 2:
                if (unidades == 0) {
                    result+="Vigésimo ";
                    return result;
                } else result+="Vigésimo";
                break;
            case 3:
                result+="Trigésimo ";
                break;
            case 4:
                result+="Cuadragésimo ";
                break;
            case 5:
                result+="Quincuagésimo ";
                break;
            case 6:
                result+="Sexagésimo ";
                break;
            case 7:
                result+="Septuagésimo ";
                break;
            case 8:
                result+="Octogésimo ";
                break;
            case 9:
                result+="Nonagésimo ";
                break;
        }

        
        if (decenas > 2 && unidades > 0)
            result+=" ";

        switch (parseInt(unidades)) {
            case 0:
                break;
            case 1:
                result+="Primero ";
                break;
            case 2:
                result+="Segundo ";
                break;
            case 3:
                result+="Tercero ";
                break;
            case 4:
                result+="Cuarto ";
                break;
            case 5:
                result+="Quinto ";
                break;
            case 6:
                result+="Sexto ";
                break;
            case 7:
                result+="Septimo ";
                break;
            case 8:
                result+="Octavo ";
                break;
            case 9:
                result+="Noveno ";
                break;
        }


        return result;


    }

    // Method to get final result

    getResult(number){

        return this.processNumberToReturn(number);

    }

}

module.exports = NumberCardinalText;