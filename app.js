const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}

function fromDollarToYen(valueIndollar) {
    let dollarToEuro = valueIndollar /= oneEuroIs.USD;
    let dollarToYen =  dollarToEuro *= oneEuroIs.JPY
    return Number(dollarToEuro.toFixed(1));
}


function fromYanToPound(valueInYan) {
    let yenToEuro = valueInYan /= oneEuroIs.JPY;
    let yenToPound = yenToEuro *= oneEuroIs.GBP;
    return Number(yenToPound.toFixed(2));
}
console.log(fromYanToPound(1000))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound }