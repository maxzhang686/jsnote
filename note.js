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

/* 
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

 */
/* 
document.getElementById("id-name");

document.getElementsByTagName("tab-name");
document.querySelector("tab-name/.class-name/#id-name")
//return the first one
//document.getElementsByClassName("class-name");
document.querySelectorAll("tab-name/.class-name")
 */


/* 
const ul = document.querySelector('ul');
ul.children; //show all elements (li) in the ul
ul.children[1];// select the second element (li)
ul.firstElementChild;

ul.childNodes; //show all node in the ul
document.documentElement.parentElement;//null
document.documentElement.parentNode;//#document

const ul = li.parentElement;

ul.previousSibling; //text node
ul.previousElementSibling; //<header></header>

const section = document.querySelector('section');
//example: 
section.className = 'xxx'; //change the section css class-name to xxx
section.classList.contains('xxx');//check is set or not.
section.classList.add('xxx');//add class name.
section.classList.toggle('xxx');//change set/unset
 */

// const ulList = document.querySelector('ul');
// const p = document.querySelector('p');

// p.textContent = "New content";
// ulList.innerHTML = "<li>new li<li>";//rewrite 

// ulList.innerHTML = ulList.innerHTML + "<li>add li<li>";//add
// //not good for the performance. render other-element you don't want to change
/* 
const list = document.querySelector('ul');
const secondLi = list.children[1]

const newLi = document.createElement('li');
newLi.classList.add("xxx")
newLi.textContent = "Number 4";
 */
//secondLi.insertAdjacentElement('afterend',newLi);


/* 
const usrInput = '';
const userName = usrInput || 'Max';
userName;
//return: "Max"

const realUserInput = 'Ivy';
const realUserName = realUserInput || 'Max'
realUserName;
//return: "ivy"

const isLoggedIn = true;
const shoppingCart = isLoggedIn && ['Books'];
shoppingCart
//return: ["Books"]

isLoggedIn = false;
isLoggedIn && ['Books'];
//return: false
null && ['Books'];
//return: null

//////#endRegion

const numbers = [1, 2, 3];
//return [1, 2, 3]

const moreNumbers = new Array(1, 5);
//return [1, 5]

const yetMoreNumbers = Array.of(5);
//return [5]

const moreNumbers1 = new Array(5);
//return [empty * 5]

const moreNumbersFrom = Array.from("Hi!");
console.log(moreNumbersFrom);
//return ["H", "i", "!"]

JSON.stringify();
JSON.parse();

 */

/* 
function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

arr.forEach(foo, obj)
arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a)
  return i > 2
}, obj)
 */

var a =  3;
if (a === 3) {
 var a = 2;
}
console.log(a);