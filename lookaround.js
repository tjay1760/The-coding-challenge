const str1 =
  "this sentence checks the orderID900 and theID866 hich were not satisfied while they were submited to the customer order #555 as still qualified wth # 345 for $555 and $233";
const str2 = "x12xyx";
const test = str2.match(/(?<=y)x/gi);
console.log(test);
