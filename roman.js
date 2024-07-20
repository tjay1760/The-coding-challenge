const romanNumbers = [
    { roman: "IV", integer: 4 },
    { roman: "XII", integer: 12 },
    { roman: "IX", integer: 9 },
    { roman: "XVII", integer: 17 },
    { roman: "XXI", integer: 21 },
    { roman: "III", integer: 3 },
    { roman: "XVI", integer: 16 },
    { roman: "VIII", integer: 8 },
    { roman: "XIV", integer: 14 },
    { roman: "VII", integer: 7 },
    { roman: "XXV", integer: 25 },
    { roman: "XXX", integer: 30 },
    { roman: "L", integer: 50 },
    { roman: "C", integer: 100 },
    { roman: "D", integer: 500 },
    { roman: "M", integer: 1000 },
    { roman: "MD", integer: 1500 },
    { roman: "MM", integer: 2000 },
    { roman: "MMM", integer: 3000 },
    { roman: "MCMXCIV", integer: 1994 }
];
const baseRomanValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
const index = Math.floor(Math.random()*romanNumbers.length)
const romanToInt =(roman)=>{
    let convertedRoman=0;

    for(let i=0;i<roman.length;i++){
        if(baseRomanValues[roman[i]]<baseRomanValues[roman[i+1]]){
            console.log("inverted")
            convertedRoman+= baseRomanValues[roman[i+1]] - baseRomanValues[roman[i]]
            i++;
            continue;
        }
        convertedRoman+=baseRomanValues[roman[i]]
    }
    console.log(romanNumbers[index])
console.log(convertedRoman)
}

romanToInt(romanNumbers[index].roman)
