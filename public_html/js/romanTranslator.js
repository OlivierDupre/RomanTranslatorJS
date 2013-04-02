var mapRomanNumbers = {
    1000: "M",
    100: "C",
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

//    while (decimalNumber > 0) {
//        romanNumber += convertAllExcept14(decimalNumber);
//        decimalNumber -= getGreatestRomanKey(decimalNumber);
//    }

    if (decimalNumber === 14) {
        romanNumber = "X" + convertAllExcept14(decimalNumber - 10);
    } else {
        romanNumber = convertAllExcept14(decimalNumber);
    }



    return romanNumber;
};

concatI = function(number) {
    var romanNumber = "";
    for (var i = 0; i < number; i++)
    {
        romanNumber += "I";
    }
    return romanNumber;
};

convertAllExcept14 = function(decimalNumber) {

    var greatestRomanKey = getGreatestRomanKey(decimalNumber);
    var romanChar = mapRomanNumbers[ greatestRomanKey ];

    var romanNumber = "";
    if (decimalNumber < greatestRomanKey) {
        romanNumber = "I";
    }

    romanNumber += romanChar;

    if (decimalNumber > greatestRomanKey) {
        romanNumber += concatI(decimalNumber - greatestRomanKey);
    }

    return romanNumber;
};