/* const numbers = [2, 2, 2]; 
numbers.push(6);//[2, 2, 2, 6]
console.log(numbers);
numbers.unshift(1);//[1, 2, 2, 2, 6]//at the beginning
console.log(numbers);

numbers.pop();//
console.log(numbers);
//return [1, 2, 2, 2]

numbers.shift();//return [2, 2, 2]
console.log(numbers);

numbers[1] = 3;//[2, 3, 2]
numbers[6] = 6;//[2, 3, 2, empty × 3, 6]
console.log(numbers);
 */

/* const numbers = [2, 2, 2, 0, 1, 2, 3]; 
numbers.splice(-3);
numbers.splice(0, 3);

console.log(numbers);
 */

// console.log(arrayName.findIndex());
// console.log(arrayName.includes(7));

/* 
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'cherries', quantity: 5}
];
const result = inventory.find( (item,index, items) => { 
  return item.name === 'cherries'} );

const resultIndex = inventory.findIndex( (item,index, items) => { 
  return item.name === 'cherries'} );

console.log(result, resultIndex); // { name: 'cherries', quantity: 5 }

 */

/* 
const arrayName = [71, 22, 103, 54, 65, 86];
const tax = 0.1;
const xArray = arrayName.slice()

console.log(`000`,arrayName);
console.log(arrayName.reverse());

const newArray = arrayName.sort((a, b)=> {
  if (a > b){
    return 1;
  } else if (a === b){
    return 0;
  } else {
    return -1;
  }
});

console.log(`copy:`,xArray);
console.log(`new:`, newArray);
console.log(`000`, arrayName);
console.log(arrayName.reverse());
console.log(`copy:`,xArray);

console.log(`000`, arrayName);
console.log(`new:`, newArray);
console.log( arrayName.reverse());
console.log(`copy:`,xArray);
 */

/* 
const arrayName = [71, 22, 103, 54, 65, 86];

const filterArray = arrayName.filter((element, index, elements) => {
  return element > 50;
})
console.log(`copy:`,filterArray);//[71, 103, 54, 65, 86]
 */


const arrayName = [1.1, 2.2, 3, 4, 5, 6];

// let sum = 0;
// arrayName.forEach((Element)=>{
//   return sum += Element;
// })
// console.log(sum);//21.3x

const sum = arrayName.reduce((prevValue, curValue, index , Elements) => {
  return prevValue + curValue;
}, 0);
console.log(sum);//21.3x