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

/* 
const numbers = [2, 2, 2, 0, 1, 2, 3]; 
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

/* 
const arrayName = [1.1, 2.2, 3, 4, 5, 6];

let sum = 0;
arrayName.forEach((Element)=>{
  return sum += Element;
})
console.log(sum);//21.3x

const sum = arrayName.reduce((prevValue, curValue, index , Elements) => {
  return prevValue + curValue;
}, 0);
console.log(sum);//21.3x

 */
/* 
const data = "Sydney;Canberra;Melbourne";
const array = data.split(";");
console.log(array);//["Sydney", "Canberra", "Melbourne"]

const nameFragments = ['Max','Zhang'];
const name = nameFragments.join(' ');
console.log(name);//Max Zhang
 */
/* 
const numbers = [1, 2, 3]; 
const newNumber = [...numbers];

numbers.push(4);
console.log(numbers, newNumber);
//[1, 2, 3, 4]    //[1, 2, 3]
console.log(Math.min(...numbers));//1

const name = [{age : 1},{age : 2}];
const newName = [...name];

name.push({age : 3});
console.log(name, newName);
//[{age: 1}, {age: 2}, {age: 3}]
//[{age: 1}, {age: 2}]

name[0].age = 4;
console.log(name, newName);
//[{age: 4}, {age: 2}, {age: 3}]
//[{age: 4}, {age: 2}]
 */

/* 
const nameFragments = ['Max','Zhang', 'male', 28];
const [firstName, LastName, ...others] = nameFragments;
console.log(firstName,LastName, others);
 */

/*
const array = [];

const person1 = {name: 'max'};
const person2 = {name: 'ivy'};
array.push(person1,person2);
console.log(array)
*/

/* 
const array = [1, 2, 3, 4, 5, 6];
const arrayMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

let month = 0;
const mapArray = arrayMonth.map( (val,idx)=> { 
  month++; 
  return { [array[idx] + `月`]: val}; 
  
});
console.log(mapArray);
 */

/* 
const person = {
  99: 20,
  1: 30
};

console.log(person);//1 will be the first one.
 */
/* 
const movie = {
  info: {
    title: "New",
  },
  id: 123,
};
const { info: newTitle, ...others } = movie;
console.log(newTitle.title);
console.log(others);
 */

// let a =  3;
// if (a === 3) {
//   a = 2;
// }
// console.log(a);

// {
//   let n=10;
//   if(true){
//       let n=5;
//   }
//   console.log('内层还是外层的n呢？',n);
// }

// let a = 1;
// console.log(a == true);

const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(person("Jill", "Wilson"));
