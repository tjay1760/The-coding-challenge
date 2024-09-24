function checkCashRegister(price, cash, cid) {
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
      ]; 
    const fullChange = Math.round((cash - price) * 100) / 100;
    let change = fullChange
    const looseChange = []
    const cidTotal = cid.reduce((sum,val)=>sum+=val[1],0);
    if(change>cidTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(change===cidTotal){
      return {status: "CLOSED", change: [...cid]}
    }
    for(let i=cid.length-1;i>=0;i--){
       let currencyChange = 0
while(change>=currencyUnits[i][1]&&cid[i][1]>0){
    
    change = Math.round((change-currencyUnits[i][1])*100)/100 
    currencyChange= Math.round((currencyChange+currencyUnits[i][1])*100)/100
    cid[i][1]= Math.round((cid[i][1]-currencyUnits[i][1])*100)/100
}
if(currencyChange>0)
{
    looseChange.push([cid[i][0],currencyChange])
}

    }
    console.log(fullChange,Math.round(looseChange.reduce((a,b)=>a+b[1],0)*100)/100)
    if (fullChange!==Math.round(looseChange.reduce((a,b)=>a+b[1],0)*100)/100){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: [...looseChange]}
    }
    // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))