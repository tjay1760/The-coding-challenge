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
let cash = 50;
const change = cash - price;
const changeArr = [];
const theChange = (change, cid)=>{
    for (let i =cid.length-1;i>=0;i--){
        while (change>cid[i][1]){
            console.log(`Subtracting ${cid[i][1]} change is ${change}`)
change-= cid[i][1];
        }
console.log(`loop ${i}`)
    }

}
theChange(change,cid)