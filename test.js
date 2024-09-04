let price = 19.5;
let cid = [
  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
 ];
const currencyUnits = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1.0],
  ["FIVE", 5.0],
  ["TEN", 10.0],
  ["TWENTY", 20.0],
  ["ONE HUNDRED", 100.0],
];
let cash = 20;
const change = cash - price;
const changeObj = {};
const theChange = (change, cid) => {
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    while (change >=currencyUnits[i][1] && currencyUnits[i][1] <= cid[i][1]) { 
      change -= parseFloat(currencyUnits[i][1]);
      cid[i][1] -= currencyUnits[i][1];
      changeObj[currencyUnits[i][0]] =
      (changeObj[currencyUnits[i][0]] || 0) + Number([currencyUnits[i][1]]);
    }
  }
  console.log(Object.values(changeObj));
};
theChange(change, cid);
