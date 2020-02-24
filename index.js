var favouriteFood = "grapes";

function foodThoughts() {
  console.log("Original fav food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New: " + favouriteFood);
}

foodThoughts();

let j = 0;
outerWhile: do {
  console.log("Outer: ", j);
  innerFor: for (let k = 0; k < 5; k++) {
    if (k === 3) {
      continue outerWhile; //infinite loop, dangerous!
    }
    console.log("Inner", k);
  }
  j++;
} while (j < 3);
