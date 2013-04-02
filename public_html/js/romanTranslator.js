var mapRomanNumbers = {
    1000: "M",
    500: "D",
    400: "CD",
    100: "C",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};

getGreatestRomanKey = function(decNb) {
    var res;

    for (var key in mapRomanNumbers) {
        if (key <= decNb) {
            res = key;
        }
    }

    return res;
};


convert = function(decimalNumber) {
    var romanNumber = "";

    while (decimalNumber > 0) {
        romanNumber += convertFromMap(decimalNumber);
        decimalNumber -= getGreatestRomanKey(decimalNumber);
    }

    return romanNumber;
};


convertFromMap = function(decimalNumber) {
    var greatestRomanKey = getGreatestRomanKey(decimalNumber);
    var romanChar = mapRomanNumbers[ greatestRomanKey ];

    var romanNumber = "";
    if (decimalNumber < greatestRomanKey ) {
        romanNumber = "I";
    }

    romanNumber += romanChar;

    return romanNumber;
};