const str1 =
  "this sentence checks the order ID900 and the ID866 hich were not satisfied while they were submited to the customer order #555 as still qualified wth # 345 for $555 and $233";

const test = str1.match(/\d+(?!\s)/gi);
console.log(test);
