"use-strict"

const capitalize = require('./utils')

class NumberCardinalText {

    processNumberToReturn(cardinal){
        
        let result = ``;

        if (cardinal == 0) {
            result+="Cero ";
            return result.toString();
        }

        let units = parseInt(cardinal % 1000);
        let miles = parseInt((cardinal / 1000) % 1000);
        let millions = parseInt((cardinal / 1000000) % 1000);
        let mileMillions = Math.trunc((cardinal / 1000000000) % 1000);

        //console.log(units, miles, millions, mileMillions);
        
        if (mileMillions > 0) result += this.getTexto(mileMillions, result.length > 0).toString() + "Mil ";
        if (millions > 0) result += this.getTexto(millions,result.length > 0).toString();

        if (mileMillions == 0 && millions == 1) result+="Millón ";
        else if (mileMillions > 0 || millions > 0) result+="Millones ";

        if (miles > 0) result += this.getTexto(miles,result.length > 0).toString() + "Mil ";
        if (units > 0) result += this.getTexto(units,result.length > 0).toString();

        return result;

    }

    getTexto(n, space){
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
                    result+="Diez ";
                    return result;
                } else if (unidades == 1) {
                    result+="Once ";
                    return result;
                } else if (unidades == 2) {
                    result+="Doce ";
                    return result;
                } else if (unidades == 3) {
                    result+="Trece ";
                    return result;
                } else if (unidades == 4) {
                    result+="Catorce ";
                    return result;
                } else if (unidades == 5) {
                    result+="Quince ";
                    return result;
                } else result+="Dieci";
                break;
            case 2:
                if (unidades == 0) {
                    result+="Veinte ";
                    return result;
                } else result+="Veinti";
                break;
            case 3:
                result+="Treinta ";
                break;
            case 4:
                result+="Cuarenta ";
                break;
            case 5:
                result+="Cincuenta ";
                break;
            case 6:
                result+="Sesenta ";
                break;
            case 7:
                result+="Setenta ";
                break;
            case 8:
                result+="Ochenta ";
                break;
            case 9:
                result+="Noventa ";
                break;
        }
        
        if (decenas > 2 && unidades > 0 && !(result.includes('Veinti') || result.includes('Dieci')))
            result+= (!space)? " y " : "y ";

        switch (parseInt(unidades)) {
            case 0:
                break;
            case 1:
                result+="Un ";
                break;
            case 2:
                result+="Dos ";
                break;
            case 3:
                result+="Tres ";
                break;
            case 4:
                result+="Cuatro ";
                break;
            case 5:
                result+="Cinco ";
                break;
            case 6:
                result+="Seis ";
                break;
            case 7:
                result+="Siete ";
                break;
            case 8:
                result+="Ocho ";
                break;
            case 9:
                result+="Nueve ";
                break;
        }

        return result;


    }

    getResult(number){
        return capitalize(this.processNumberToReturn(number).toLowerCase());
    }

}

module.exports = NumberCardinalText;