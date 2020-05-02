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

// const numbers = [2, 2, 2, 0, 1, 2, 3]; 
// numbers.splice(-3);
// numbers.splice(0, 3);

// console.log(numbers);

const arrayName = [1, 2, 3, 4, 5, 6]
// console.log(arrayName.findIndex());

// const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'cherries', quantity: 5}
// ];
// const result = inventory.find( (item,index, items) => { 
//   return item.name === 'cherries'} );

// const resultIndex = inventory.findIndex( (item,index, items) => { 
//   return item.name === 'cherries'} );

// console.log(result, resultIndex); // { name: 'cherries', quantity: 5 }
// console.log(arrayName.includes(7));
const newArray = [];

arrayName.forEach((element, index, elements)=>{
  newArray.push(element);
})
console.log(newArray);