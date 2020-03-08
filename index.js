/* 
```js

```
 */
/* var favouriteFood = "grapes";

function foodThoughts() {
  console.log("Original fav food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New: " + favouriteFood);
}

foodThoughts();
//what tis the output?
 */


/*  
var name = "Max";

if (name === "Max") {
  let hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

function greet( ) {
  var age = 30;
  var name = "ivy";
  console.log(name, age); 
}
greet();

console.log(name, hobbies);
 */

'use strict';
/* 
console.log(name);
var name = "Max";

const sumUp = (a, b, ...number) => {
  let sum = 0;
  for (const num of number ){
    sum += num;
  }
  return sum;
}

console.log(sumUp(1, 2, 3, 4));
//output: 36
 */


const sumUp = (resultHandler, ...number) => {
  let sum = 0;
  for (const num of number ){
    sum += num;
  }
  resultHandler(sum);
}
const showResult = ( result) => {
  alert( "Total result is: " + result)
}

sumUp(showResult, 1, 2, 3, 4);