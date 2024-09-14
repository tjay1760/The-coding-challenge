const str1 =
  "this sentence checks the orderID900 and theID866 hich were not satisfied while they were submited to the customer order #555 as still qualified wth # 345 for $555 and $233";

const test = str1.match(/(?=e)en\w+/gi);
console.log(test);
