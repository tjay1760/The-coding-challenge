let price = 19.5;
let cid = [
  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
];

const currencyUnits = [
  ['ONE HUNDRED', 100.00],
  ['TWENTY', 20.00],
  ['TEN', 10.00],
  ['FIVE', 5.00],
  ['ONE', 1.00],
  ['QUARTER', 0.25],
  ['DIME', 0.10],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

const purchaseBtn = document.getElementById('purchase-btn');
const changeDiv = document.getElementById('change-due');

const changeCounter = (change) => {
  const cidTotal = cid.reduce((a, b) => a + b[1], 0);
  let changeObj = {};
  let remainingChange = change;

  if (change > cidTotal) {
    return { Status: "INSUFFICIENT_FUNDS" };
  }

  const tempCid = cid.map(([name, amount]) => [name, amount]);

  for (let i = 0; i < currencyUnits.length; i++) {
    const [unitName, unitValue] = currencyUnits[i];
    let unitAmount = 0;

    while (remainingChange >= unitValue && tempCid.find(item => item[0] === unitName)[1] > 0) {
      unitAmount += unitValue;
      remainingChange = Math.round((remainingChange - unitValue) * 100) / 100;
      const index = tempCid.findIndex(item => item[0] === unitName);
      tempCid[index][1] = Math.round((tempCid[index][1] - unitValue) * 100) / 100;
    }

    if (unitAmount > 0) {
      changeObj[unitName] = unitAmount;
    }
  }

  if (remainingChange > 0) {
    return { Status: "INSUFFICIENT_FUNDS" };
  }

  if (Math.abs(cidTotal - change) < 0.01) {
    changeObj = { Status: "CLOSED", ...Object.fromEntries(cid) };
  } else {
    changeObj = { Status: "OPEN", ...changeObj };
  }

  return changeObj;
};

purchaseBtn.addEventListener('click', () => {
  const cash = parseFloat(document.getElementById('cash').value);
  const change = Math.round((cash - price) * 100) / 100;
  changeDiv.innerHTML = '';

  if (change < 0) {
    alert("Customer does not have enough money to purchase the item");
  } else if (change === 0) {
    changeDiv.innerHTML = "No change due - customer paid with exact cash";
  } else {
    const myChange = changeCounter(change);
    if (myChange.Status === "INSUFFICIENT_FUNDS") {
      changeDiv.innerHTML = "Status: INSUFFICIENT_FUNDS";
    } else {
      let output = `Status: ${myChange.Status}`;
      for (let [key, value] of Object.entries(myChange)) {
        if (key !== "Status" && value > 0) {
          output += ` ${key}: $${value.toFixed(2)}`;
        }
      }
      changeDiv.innerHTML = output;
    }
  }
});