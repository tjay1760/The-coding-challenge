let glassesArray = [];
let glassSum =0; 
let allGlasses = 0;
const glassWidth = 3;
const glassHeight =3;

const dataArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];
  for (let i =0; i<dataArray.length;i++){
    for (let j=0; j<dataArray[i].length;j++){
        if(j+1-glassWidth>=0 && i+1-glassHeight>=0){
            allGlasses ++
        }
    }
  }
console.log(allGlasses)