const cities = [
    { city: "Tokyo", population: 37400068 },
    { city: "Delhi", population: 29399141 },
    { city: "Shanghai", population: 26317104 },
    { city: "São Paulo", population: 21846507 },
    { city: "Mumbai", population: 20667656 },
    { city: "Mexico City", population: 21671908 },
    { city: "Beijing", population: 20035455 },
    { city: "Cairo", population: 20484965 },
    { city: "Dhaka", population: 19577933 },
    { city: "New York", population: 18804000 }
  ];
const allCities = cities.reduce((citiesObj,city)=>{
    citiesObj[city.city]= city.population
    return citiesObj
},{});
console.log(allCities)  