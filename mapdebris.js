function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let op = 2*Math.PI*(Math.sqrt(Math.pow(earthRadius + arr[0].avgAlt,3)/GM))
    console.log(op) 
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
