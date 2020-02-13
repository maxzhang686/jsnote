const defaultResult = 0;
let currentResult = defaultResult;
let newObject = {
  name : "max",
  age: 27,
};
let newArray =[1, 2, 3];


console.log(newArray.push())
currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);


newArray