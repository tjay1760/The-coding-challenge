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
const romanToInt =(roman)=>{
console.log(roman[0])
}
const index = Math.floor(Math.random()*romanNumbers.length)
romanToInt(romanNumbers[index].roman)
