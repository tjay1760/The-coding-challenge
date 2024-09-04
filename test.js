let price = 21.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const currencyUnits = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.10],
    ['QUARTER', 0.25],
    ['ONE', 1.00],
    ['FIVE', 5.00],
    ['TEN', 10.00],
    ['TWENTY', 20.00],
    ['ONE HUNDRED', 100.00]
]
let cash = 50;
const change = cash - price;
const changeObj = {};
const theChange = (change, cid)=>{
    for (let i =currencyUnits.length-1;i>=0;i--){
        while (change>currencyUnits[i][1]){
            changeObj[currencyUnits[i][0]] = (changeObj[currencyUnits[i][0]]||0)+ Number([currencyUnits[i][1]])  
change-= currencyUnits[i][1];
cid[i][1]-= currencyUnits[i][1];
        }
    }
console.log(changeObj)
console.log(cid)
}
theChange(change,cid)