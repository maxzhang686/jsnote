# JavaScript

- [1. Getting Started](#1-getting-started)
- [2. Language Basics, Base Syntax](#2-language-basics-base-syntax)
- [3. Control Structures (if, Loops, Error…)](#3-control-structures-if-loops-error)
- [4. "Behind the Scenes of JS The (Weird) Past (ES3, ES5) & Present (ES6+)"](#4-behind-the-scenes-of-js--the-weird-past-es3-es5--present-es6)
- [5. A Closer Look at Functions](#5-a-closer-look-at-functions)
- [6. DOM Basics](#6-dom-basics)
- [7. Arrays & Iterables](#7-arrays--iterables)
- [8. Objects](#8-objects)
- [9. Classes & Object-oriented Programming (OOP)](#9-classes--object-oriented-programming-oop)
- [10. Constructor Functions & Prototypes](#10-constructor-functions--prototypes)
- [11. Practice: OOP & Classes](#11-practice-oop--classes)
- [12. More about DOM & Browser APIs](#12-more-about-dom--browser-apis)
- [13. Events](#13-events)
- [14. Advanced Function Concepts](#14-advanced-function-concepts)
- [15. More about Numbers & Strings](#15-more-about-numbers--strings)
- [16. Asynchronous/Async JS: Promises & Callbacks](#16-asynchronousasync-js-promises--callbacks)
- [17. Background Http (Ajax)](#17-background-http-ajax)
- [18. 3rd Party Libraries](#18-rd-party-libraries)
- [19. JavaScript Modules](#19-javascript-modules)
- [20. Tooling (Webpack, Babel, …)](#20-tooling-webpack-babel-)
- [21. Working with Browser Storage](#21-working-with-browser-storage)
- [22. Browser Support](#22-browser-support)
- [23. Practice](#23-practice)
- [24. JavaScript Frameworks](#24-javascript-frameworks)
- [25. Meta-programming: Symbols, Iterators, Generators, Reflect API & Proxy API](#25-meta-programming-symbols-iterators-generators-reflect-api--proxy-api)
- [26. NodeJS Introduction](#26-nodejs-introduction)
- [27. Security](#27-security)
- [28. Deployment](#28-deployment)
- [29. Performance Optimizations & Memory Leaks](#29-performance-optimizations--memory-leaks)
- [30. Testing](#30-testing)
- [31. Bonus: Programming Paradigms (Procedural vs Object Oriented vs Functional)](#31-bonus-programming-paradigms-procedural-vs-object-oriented-vs-functional)
- [32. Bonus: Data Structures & Algorithms Introduction](#32-bonus-data-structures--algorithms-introduction)
- [33. Bonus: TypeScript Introduction](#33-bonus-typescript-introduction)
- [34. Bonus: Web Components](#34-bonus-web-components)
- [35. Roundup & Next Steps](#35-roundup--next-steps)
- [36. Efficient Development & Debugging](#36-efficient-development--debugging)

## 1. Getting Started

### 1.1. Dynamic vs Weakly Typed Languages

#

### 1.2. Converting Data Types

(类型转换)  
**change the string to number.**

```js
parseInt("10", 2); //change to a number, then to radix 2
parseFloat(10.1);
```

```js
let newResult = result + +userInput.value;
// **also work as*
let newResult = result + parseInt(userInput.value);
```

if the number's length is more than 16, it wouldn't work. try use BigInt().

**change the number to string.**

```js
result.toString();
const num = 10;
console.log(num.toString(2)); //1010
```

**check is it a number.**

```js
isNan(inputNumber);
```

```JS
JSON.stringify();
JSON.parse();
```

```js
var str = "Hello World!";
var enc = window.btoa(str);
var dec = window.atob(enc);
// Encoded String: SGVsbG8gV29ybGQh
// Decoded String: Hello World!
```

### 1.3. Build-in function

**delete white space**

```js
inputValue.trim();
```

**font setting**

```js
xxx.toUpperCase();
```

**A random number**

```js
Math.random();
```

**change contents of an array**  
[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
arrayName.push(objectName);
arrayName.splice(startIndexNumber, deleteCount, addItem1, addItem2, ...);
```

```js
btn.addEventListener('click', function)
alert()
prompt()//alert and input
```

---

## 2. Language Basics, Base Syntax

#

### 2.1. Variables & Constants

![find](noteimgs/section1a.jpg)

variable: A data container where the data can be changed during program execution.

#

### 2.2. Declaring & Defining

![find](noteimgs/section1b.png)

**set up as a global value:**  
it's also quite common to use all uppercase characters there and separate words with an underscore, to make it really clear that this is a global value which you just 'hard coded' into the code.

```js
const ATTACK_VALUE = 10;
```

#

### 2.3. Operators

![find](noteimgs/section1c.png)

```js
number = number + newNumber; //same as:
number += newNumber;

number = number + 1; //same as:
number++;
```

#

### 2.4. Some data types

![find](noteimgs/section1d.png)

**String**  
Javascript template literal ` (``) `. [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
let currentResult = "(" + defaultResult + "+ 10) * 3 / 2 -1";
let currentResult = `(${defaultResult} + 10) * 3 / 2 -1`;
```

string Escape notation. [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)

- css: `white-space: pre`.

#

### 2.5. Function

![find](noteimgs/section1e.png)

A function defines code which doesn't execute right away but which can be executed multiple times by calling the function.

A function is "code on demand".

Function parameters are Data that can be provided to the function (input) - available only inside of the function, like local variables.

**Most importantly**: A function is not "an alternative to a variable". It supports a totally different use-case. But it's also worth pointing out that variables are NOT restricted to storing numbers or strings.

**defines**

```js
function functionName(parameter1, parameter2) {
  const result = parameter1 + parameter2;
  alert(`The result is ${result}`);
}
```

**call function**

```js
functionName();
```

- Build-in function
  alert(), addEventListener(), prompt()

弹窗

#

### 2.7. return

```js
function functionName(parameter1, parameter2) {
  const result = parameter1 + parameter2;
  return result;
}
```

Any code that have write after <span style="color: red">`return`</span>, won't execute.

#

### 2.6. "Indirect" vs "Direct" Function Execution

<!-- scope and closures!!!(other section explain more) -->

It can be confusing to see that there seem to be two ways of executing a function:

```js
function add() {
  something = someNum + someOtherNum;
}
```

<span style="color: red">`add()`</span> vs <span style="color: red">`add`</span>

It's important to understand why we have these "two ways"!

**In general**, you call a function that you defined by **using its name** (e.g. `add`) and **adding parentheses** (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> <span style="color: red">`add()`</span>

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

**Sometimes however**, you **don't want to execute the function immediately**. You rather want to "tell JavaScript" that it should execute a certain function **at some point in the future** (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> <span style="color: red">`someButton.addEventListener('click', add);`</span>

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

<span style="color: red">`someButton.addEventListener('click', add());`</span> would be wrong.

Why? Because JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses => That means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:

```js
let someVar = 5;
add;
alert("Do something else...");
```

Why?

Because you just throw the name of the function in there but **you don't give any other information to JavaScript**. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.

#

### 2.8. scope and closures

You can't use local/block-scope variables(= declared inside of functions) outside of them.

**shadowing**

What happens if you have this code?

```js
let userName = "Max";
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = "Menu";
greetUser("Max");
```

This will actually show an alert that says <span style="color: red">`'Max'`</span> (NOT <span style="color: red">`'Menu'`</span>).

You might've expected that an error gets thrown because we use and declare <span style="color: red">`userName`</span> more than once - and as you learned, that is not allowed.

It indeed is **not allowed on the same level/ in the same scope**.

So this would fail:

```js
let userName = "Max";
let userName = "Menu";
```

Why does it work in the first code snippet though?

Because we first create a global variable <span style="color: red">`userName`</span> via

```js
let userName = "Max";
```

But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their **own scope**, JavaScript does something which is called **"shadowing"**.

It **creates a new variable on a different scope** - this variables does not overwrite or remove the global variable by the way - **both co-exist**.

When referring to <span style="color: red">`userName`</span> inside of the <span style="color: red">`greetUser`</span> function we now **always refer to the local, shadowed variable**. Only **if no such local variable existed, JavaScript would fall back to the global variable**.

#

### 2.9. Converting Data Types

类型(数值)转换

**change the string to number.**

```js
parseInt(10);
parseFloat(10.1);
```

**also work as**

```js
result + +userInput.value = result + parseInt(userInput.value);
```

if the number's length is more than 16, it wouldn't work. try use BigInt().

**change the number to string.**

```js
result.toString();
```

**check is it a number.**

```js
isNan(inputNumber);
```

**font setting**

```js
xxx.toUpperCase();
```

**Mix number and string**  
You saw the example with a number and a "text number" being added

<span style="color: red">`3 + '3'`</span>=> <span style="color: red">`'33'`</span>

in JavaScript.

That happens because the + operator also supports strings (for string concatenation).

It's the only arithmetic operator that supports strings though. For example, this will not work:

<span style="color: red">`'hi' - 'i'`</span>=> <span style="color: red">`NaN`</span>

<span style="color: red">`NaN`</span> is covered a little later, the core takeaway is that you can't generate a string of 'h' with the above code. Only <span style="color: red">`+`</span> supports both strings and numbers.

Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

<span style="color: red">`3 * '3'`</span> => <span style="color: red">`9`</span>

Please note: It yields the number (!) <span style="color: red">`9`</span>, NOT a string <span style="color: red">`'9'`</span>!

Similarly, these operations also all work:

<span style="color: red">`3 - '3'`</span> => <span style="color: red">`0`</span>

<span style="color: red">`3 / '3'`</span> => <span style="color: red">`1`</span>

Just <span style="color: red">`3 + '3'` </span>yields <span style="color: red">`'33'`</span> because here JavaScript uses the "I can combine text" mode of the <span style="color: red">`+`</span> operator and generates a string instead of a number.

#

### 2.10. arrays

Section 8 will explain more. [Link](#8-arrays--iterables)  
Array: A list of data of any kind.

```js
newArray = [1, 2, 3]；
newArray.push("4")；
console.log(newArray[0]);
```

#

### 2.11. object

Section 9 will explain more. [Link](#9-objects)  
object: grouped data, structured in key-value pairs.

```js
newObject = {
  name: 'max';
  age: 27;
}；
console.log(newObject.name);
```

#

### 2.12. undefined, null & NaN

![find](noteimgs/section1f.png)

<span style="color: red">`undefined`</span> & <span style="color: red">`null`</span> - whilst the two values are similar, they're not equal. undefined is a special type and the default value for undefined variables, null is actually of type object and never a default value of anything.

#

### 2.13. type of

`typeof [1, 2, 3]` is an **Object**  
`typeof undefined` is **undefined**  
`typeof null` is **Object**  
`typeof NaN` is **number**

#

### 2.14. import JS file with "defer" & "async"

插入(引用)JS,
only for external file

![find](noteimgs/section1g.png)
![find](noteimgs/section1h.png)
![find](noteimgs/section1i.png)

---

## 3. Control Structures (if, Loops, Error…)

- conditional Statements(if) & Expressions
- Boolean Values & Operators
- Loops in JavaScript
- Error Handing

#

### 3.1. conditional code

![find](noteimgs/section3a.png)

Understanding the "Condition"  
Always keep in mind that <span style="color: red">`condition`</span> in

```js
if (condition) { ... }
```

simply has to be a **boolean value**.

Often, you'll generate such a boolean value with the help of <span style="color: red">`===`, `>`, `<` </span>etc. **All these operators** yield boolean values (without changing the variables/ values you're using them on).

Since <span style="color: red">`if`</span> only wants a boolean, you of course **don't have to use such an operator**. If you already got a variable that holds a boolean, you can use it without any extra operator.

Example:

```js
const isLoggedIn = true;
if (isLoggedIn) {
  // This code will execute because isLoggedIn is true => A valid condition
}
```

You could write

```js
const isLoggedIn = true;
if (isLoggedIn === true) {
    ...
}
```

but that would be **redundant**. You'd generate another new boolean where you already got one.

You can use the <span style="color: red">`!`</span> operator to negate ("invert") the value:

```js
const isLoggedIn = true;
if (!isLoggedIn) {
  // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
  // This would execute because !isLoggedIn yields false => else block executes
}
```

Again, that would be similar to:

```js
const isLoggedIn = true;
if (isLoggedIn !== true) {
  // This would NOT execute
} else {
  // This would execute because isLoggedIn is true and hence !== true yields false
}
```

But again, that would be redundant.

**More on Text (String) Comparisons**  
Strings can also be compared with greater than (<span style="color: red">`>`</span>) or lower/ smaller than (<span style="color: red">`<`</span>) operators.

JavaScript compares strings based on standard lexicographical ordering, using Unicode values.

That means that <span style="color: red">`b`</span> is greater than <span style="color: red">`a`</span> for example.

JavaScript always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters.

See these examples:

```js
"ab" > "aa"; // true
"a" > "B"; // true
"a" > "b"; // false
```

#

### 3.2. if statements

Example:

```js
  if (x > 50 && ( x = 30 || x = 20) {
    /* do the right thing */
  } else if (x > 5) {
    /* do the right thing */
  } else {
    /* do the right thing */
  }
```

**compare object and array**

```js
ArrayOne = [1, 2, 3];
ArrayTwo = [1, 2, 3];
ArrayOne == ArrayTwo; //return false
```

same as object

#

### 3.3. Operator Precedence (and & or)

![find](noteimgs/section3b.png)

[Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

#

### 3.4. Falsy and Truthy

![find](noteimgs/section3c.png)

Falsy and Truthy value (**Print out**)
![find](noteimgs/section3d.png)

#

### 3.5. Ternary Operator

三元  
![find](noteimgs/section3k.png)

Example:

```js
let maxDamage;
let logEvent;
if (mode === MODE_ATTACK) {
  maxDamage = ATTACK_VALUE;
  logEvent = LOG_EVENT_PLAYER_ATTACK;
} else if (mode === MODE_STRONG_ATTACK) {
  maxDamage = STRONG_ATTACK_VALUE;
  logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
}
```

```js
const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
const logEvent =
  mode === MODE_ATTACK
    ? LOG_EVENT_PLAYER_ATTACK
    : LOG_EVENT_PLAYER_STRONG_ATTACK;
```

#

### 3.6. Statements vs Expressions

#

### 3.7. logical Operators - "Tricks" shorthands

![find](noteimgs/section3e.png)

||:  
if the `first value` is true, return the `first value`.  
if the `first value` is false, return the `second value`.

```js
const usrInput = "";
const userName = usrInput || "Max";
userName;
//return: "Max"

const realUserInput = "Ivy";
const realUserName = realUserInput || "Max";
realUserName;
//return: "ivy"
```

&&:  
if the `first value` is true, return the `second value`.  
if the `first value` is false, return the `first value`.

```js
const isLoggedIn = true;
const shoppingCart = isLoggedIn && ["Books"];
shoppingCart;
//return: ["Books"]

isLoggedIn = false;
isLoggedIn && ["Books"];
//return: false
null && ["Books"];
//return: null
```

- change example img to code later:
  ![find](noteimgs/section3f.png)

---

![find](noteimgs/section3g.png)

---

![find](noteimgs/section3h.png)

#

### 3.8. logical Operators

(**Print out**)

As a **reference** which you can come back to (or print out), here's a **quick summary** of how **logical operators** and **comparison operators** behave in JavaScript:

```js
const userName = "Max";
const altName = "";
console.log(userName === "Max"); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'

console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || "Max"); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ""); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || "Anna"); // altName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && "Anna"); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && "Anna"); // altName is falsy, hence first value is returned => ''
console.log(userName && ""); // userName is truthy, hence second value is returned => ''
```

**Always keep in mind: NO** operator (neither <span style="color: red">`===`</span>, <span style="color: red">`>`</span> etc. nor <span style="color: red">`&&`</span> or <span style="color: red">`||`</span>) changes the variable you might be using in the comparison. In the above examples, the values stored in <span style="color: red">`userName`</span> and <span style="color: red">`altName`</span> **are NEVER changed**.

<span style="color: red">`===`, `>`</span> etc. just **generate new boolean values** which are used in the comparison. <span style="color: red">`||` and `&&`</span> **generate NO booleans**, they just treat the **values before and after them as conditions** (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use <span style="color: red">`||`</span> in JavaScript to assign default/ fallback values to variables/ constants:

```js
const enteredValue = ""; // let's assume this is set based on some input provided by the user, therefore it might be an empty string

const userName = enteredValue || "PLACEHOLDER"; // will assign 'PLACEHOLDER' if enteredValue is an empty string
```

#

### 3.9. Switch with "break"

Switch with 'greater than' ect. [Link](https://stackoverflow.com/questions/32576618/switch-statement-to-compare-values-greater-or-less-than-a-number/32576647)

example:

```js
let logEntry = {
  event: ev,
  value: val,
  finalMonsterHealth: monsterHealth,
  finalPlayerHealth: playerHealth,
};
if (ev === LOG_EVENT_PLAYER_ATTACK) {
  logEntry.target = "MONSTER";
} else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  logEntry = {
    event: ev,
    value: val,
    target: "PLAYER",
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
}
```

```js
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
    break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: 'MONSTER',
        finalMonsterHealth: mon sterHealth,
        finalPlayerHealth: playerHealth
      };
    break;
    default:
      logEntry = { };
    break;
 }
```

#

### 3.10. Loop

![find](noteimgs/section3i.png)

#### 3.10.1. for loop

```js
for (let i = 0; i < 3; i++) {
  console.log(i)；
}

for (let i = 10; i > 0) {
  i--;//from 9 to 0
  console.log(i);
  //i--; from 10 to 1
}
```

#### 3.10.2. for-of loop

```js
for (let i = 0; i < battleLog.length, i++) {
  console.log(battleLog[i]);
}

for (const logEntry of battleLog){
  console.log(logEntry);
}

```

#### 3.10.3. for-in loop

```js
let i = 1;
for (const logEntry of battleLog) {
  console.log(`Round ${i}`);
  for (const key in logEntry) {
    console.log(`${key} : ${logEntry[key]}`);
  }
  i++;
}
```

#### 3.10.4. while loops

```js
let randomNumber = [];
let finished = false;

while (!finished) {
  let number1 = Math.random();
  randomNumber.push(number1);
  if (number1 > 0.8) {
    finished = true;
  }
}
console.log(randomNumber);
```

**do-while**

```js
let j = 3;
while (j < 3) {
  console.log(j);
  j++;
}
//no output
```

```js
let j = 3;
do {
  console.log(j);
  j++;
} while (j < 3);
//output: 3
```

**forEach()**  
read more on array section [forEach() & map()](<#77-forEach()>)

#

### 3.11. break and continue in Loop

**Break** indeed does stop the entire loop execution immediately and moves on to code execution after the loop.

**Continue** The current iteration is stopped/ skipped and the next iteration (of the same loop) starts.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//output: 0, 1, 2, 3, 4.
```

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
//output: 0, 1, 2.
```

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
//output: 0, 1, 2, 4.
```

**Labeled Statements**

```js
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
```

#

### 3.12. try catch

![find](noteimgs/section3j.png)

```js
try {
} catch (error) {
} finally {
}
```

---

## 4. Behind the Scenes of JS The (Weird) Past (ES3, ES5) & Present (ES6+)

- ES5 vs ES6+ Syntax
- How JavaScript Works (heap, stack, Garbage collection & Memory Management)
- The Weird Parts

#

### 4.1. var let const

`var` has global/function(local) scope, `let` and `const` have block scope.

```js
var name = "Max";
var name = "Ivy";

console.log(name);
//Output: Ivy
//This will actually not throw an error.
```

```js
if (name === "Ivy") {
  var hobbies = ["Cooking", "Coding"];
  //let hobbies = ["Cooking", "Coding"];
}
console.log(hobbies);
//throw an error while using let.
```

In the new project, **do not** use `var` anymore.

#

### 4.2. "Hoisting"

变量提升

```js
console.log(name);
var name = "Max";
//output: undefined
```

```js
console.log(name);
let name = "Max";
//error: ReferenceError. Cannot access 'name' before initialization.
```

#

### 4.3. Strict Mode

```js
"use strict"; //first line

```

#

### 4.4. Parsed & Compiled

**heap and stack** [Link-CN](https://juejin.im/post/5d116a9df265da1bb47d717b)

**primitive vs reference Values**  
7 个基本原始类型

- Seven data types that are primitives:  
  Boolean  
  Null  
  Undefined  
  Number  
  BigInt  
  String  
  Symbol
- and Object (reference)

**Garbage collection & Memory Management**

Very important this section. Need to come back and really understand what they are.
More on JavaScript Memory Management (Garbage Collection): [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

V8's Garbage Collection Logic: [V8-Link](https://v8.dev/blog/free-garbage-collection)

V8's JavaScript Engine in Great Detail: [Link](https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef)

More on Primitive vs Reference Values: [Link](https://academind.com/learn/javascript/reference-vs-primitive-values/)

---

## 5. A Closer Look at Functions

- Different way of creating Function
- Anonymous Function (匿名函数)
- Callback Function & function in function
- Default Arguments & Rest Operator
- bind() & more

![find](noteimgs/section5a.png)

#

### 5.1. Parameter VS Argument

Throughout this course, you'll hear me use the words "**parameters**" and "**arguments**" interchangeably.

Technically, there is **a difference though**:

Parameters are these variables which you specify between parentheses when defining a function.

```js
function sayHi(name) { ... }
```

In this example, <span style="color: red">`name`</span> is a parameter.

Arguments then are the concrete values you pass to a function when calling that function:

```js
sayHi("Max");
```

<span style="color: red">`'Max'`</span> is an argument of the function therefore - for the <span style="color: red">`name`</span> parameter to be precise.

Since both concepts obviously are extremely close connected, I will often say "let's define which arguments a function receives" or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa).

#

### 5.2. creating function

**Function & object**

function can be a object.  
object can be a function.

**Function in Variable**

**Function Expressions vs Function Declarations**

Function declarations automatically create variables that hold the function objects, function expressions don't do that - they return an object instead, it's your job to then do something with it (e.g. store it in a variable).

![find](noteimgs/section5c.png)

#

### 5.3. Anonymous Functions

https://www.jianshu.com/p/435bd1e773cd

#

### 5.4. Arrow Function

```js
function normalFc(name) {
  console.log(name);
}

const normalFc = function (name) {
  console.log(name);
};

const arrowFc = (name) => {
  console.log(name);
};
```

```js
//normalFc
const add = function (a, b) {
  return a + b;
};
//arrowFc
const add = (a, b) => a + b;
```

![find](noteimgs/section5d.png)

For arrow functions, you got a couple of different syntaxes which you can use - here's a summary.

**Important: Don't miss the "function only returns an object" special case at the end of this article!**

**1) Default syntax:**

```js
const add = (a, b) => {
  const result = a + b;
  return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
```

Noteworthy: Semi-colon at end, no function keyword, parentheses around parameters/ arguments.

**2) Shorter parameter syntax, if exactly one parameter is received:**

```js
const log = (message) => {
  console.log(message); // could also return something of course - this example just doesn't
};
```

Noteworthy: Parentheses around parameter list can be omitted (for exactly one argument).

**3) Empty parameter parentheses if NO arguments are received:**

```js
const greet = () => {
  console.log("Hi there!");
};
```

Noteworthy: Parentheses have to be added (can't be omitted)

**4) Shorter function body, if exactly one expression is used:**

```js
const add = (a, b) => a + b;
```

Noteworthy: Curly braces and return statement can be omitted, expression result is always returned automatically

**5) Function returns an object (with shortened syntax as shown in 4)):**

```js
const loadPerson = (pName) => ({ name: pName });
```

Noteworthy: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).

That last case can be confusing: Normally, in JavaScript, curly braces always can have exactly one meaning.

```js
const person = { name: 'Max' }; // Clearly creates an object
if (something) { ... } // Clearly used to mark the if statement block
```

But when using arrow functions, curly braces can have two meanings:

1. Mark the function body (in default form)

2. Create an object which you want to return (in shorter function body form)

To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above.

- explain more in other section.

#

### 5.5. default Arguments

function can be called with less(or without any) arguments.

```js
const defaultValue = 1;
const sumUp = (number1, number2 = defaultValue) => {
  return number1 + number2;
};

console.log(sumUp(2));
//output: 3
```

Default arguments are not a "validation mechanism".

#

### 5.6. Rest Parameters

Rest Operator must be the last Parameters.

```js
const sumUp = (...number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 4));
//output: 10
```

It bundles all arguments beyond the first 2 argument into an array.

```js
const sumUp = (a, b, ...number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 4));
//output: 7
```

\*`arguments` not work in arrow function. (don't use that in you code)

```js
const sumUp = function () {
  let sum = 0;
  for (const num of arguments) {
    // don't use that
    sum += num;
  }
  return sum;
};
console.log(sumUp(1, 2, 3, 4));
//output: 10
```

#

### 5.7. function inside of function

_Will dive deeper._

#

### 5.8. call back function

```js
const sumUp = (resultHandler, ...number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  resultHandler(sum);
};
const showResult = (result) => {
  alert("Total result is:" + result);
};

sumUp(showResult, 1, 2, 3, 4);
//output: 10
```

#

### 5.9. bind()

In situations where you want to "pre-configure" a function's arguments, when you're not calling the function on your own.

**The following resources may be helpful.**

More on Functions : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

**bind()**: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

#

### 5.10. call() & apply()

_Will dive deeper._

---

## 6. DOM Basics

- HTML, DOM & JavaScript
- Nodes & Elements
- Querying DOM Nodes & Traversing the Dom
- Evaluating & Manipulation DOM Nodes
- Creating & Removing DOM Nodes

![find](noteimgs/section6a.png)
![find](noteimgs/section6b.png)

#

### 6.1. Document and Window Object

```js
console.dir(document);

window.alert("Max") = alert("Max");
```

```js
$0;
//$0 always gives you access to the last element you selected in the "Elements" tab!
```

#

### 6.2. node & element

![find](noteimgs/section6d.png)
![find](noteimgs/section6d1.png)

Querying Elements
![find](noteimgs/section6c.png)

look at [6.11. live node lists vs static node lists](#611-live-node-lists-vs-static-node-lists)

#

### 6.3. Selecting Elements

```js
document.getElementById("id-name"); //live
document.querySelector("tab-name/.class-name/#id-name"); //live
//return the first one

//document.getElementsByClassName("class-name");
document.querySelectorAll("tab-name/.class-name"); //none live
document.getElementsByTagName("tab-name"); //live
```

#

**Summary: Node Query Methods**  
Here's a summary of the various methods you got to reach out to DOM elements (note: you can only query for element nodes).

Besides the below query methods, you also got these special properties on the document object to select parts of the document:

<span style="color: red">`document.body`</span> => Selects the <span style="color: red">`<body>`</span> element node.

<span style="color: red">`document.head`</span> => Selects the <span style="color: red">`<header>`</span> element node.

<span style="color: red">`document.documentElement`</span> => Selects the <span style="color: red">`<html>`</span> element node

...
**QUERY METHODS**
....

```js
document.querySelector(<CSS selector>);
```

Takes any CSS selector (e.g. <span style="color: red">`'#some-id'`</span>, <span style="color: red">`'.some-class'`</span> or <span style="color: red">`'div p.some-class'`</span>) and returns the first (!) matching element in the DOM. Returns <span style="color: red">`null`</span> if no matching element could be found.

More information: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```js
document.getElementById(<ID>);
```

Takes an ID (without <span style="color: red">`#`</span>, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns <span style="color: red">`null`</span> if no element with the specified ID could be found.

More information: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

```js
document.querySelectorAll(<CSS selector>);
```

Takes any CSS selector (e.g. <span style="color: red">`'#some-id'`</span>, <span style="color: red">`'.some-class'`</span> or <span style="color: red">`'div p.some-class'`</span>) and returns all matching elements in the DOM as a static (non-live) <span style="color: red">`NodeList`</span>. Returns and empty <span style="color: red">`NodeList`</span> if no matching element could be found.

More information: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

```js
document.getElementsByClassName(<CSS CLASS>);
```

Takes a CSS class g (e.g. <span style="color: red">`'some-class'`</span>) and returns a live <span style="color: red">`HTMLCollection`</span> of matched elements in your DOM. Returns an empty <span style="color: red">`HTMLCollection`</span> if not matching elements were found.

More information: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

```js
document.getElementsByTagName(<HTML TAG>);
```

Takes an HTML tag (e.g. <span style="color: red">`'p'`</span>) and returns a live <span style="color: red">`HTMLCollection`</span> of matched elements in your DOM. Returns an empty <span style="color: red">`HTMLCollection`</span> if not matching elements were found.

More information: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)

There also is the <span style="color: red">`getElementsByName()`</span> method which really isn't used commonly [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).

#

### 6.4. Exploring and Changing DOM Properties

![find](noteimgs/section6e.png)
https://developer.mozilla.org/en-US/docs/Web/API

#

### 6.5. Attributes vs Properties

![find](noteimgs/section6f.png)

#

### 6.6. Traversing

![find](noteimgs/section6g.png)
![find](noteimgs/section6h.png)

**child nodes**

```js
const ul = document.querySelector("ul");
ul.children; //show all elements (li) in the ul
ul.children[1]; // select the second element (li)
ul.childNodes; //show all node in the ul
```

**parent node**

```js
document.documentElement.parentElement; //null
document.documentElement.parentNode; //#document
```

```jsx
<html>
  <body>
    <header></header>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </body>
</html>;

const firstLi = document.querySelector("li");
li.parentNode; //select parent node (ul)

firstLi.closest("body"); //<body></body>
firstLi.closest("header"); //null
```

**sibling element**

```js
ul.previousSibling; //text node
ul.previousElementSibling; //<header></header>
ul.nextElementSibling;
```

#

### 6.7. styling dom elements

![find](noteimgs/section6i.png)
via inline style

```js
const task1 = document.querySelector("li");

task1.style.backgroundColor = "black";
task1.style["background-color"] = "black";
task1.style.color = "white";

const h1 = document.getElementsByTagName("h1");
h1[0].textContent = "Assignment - Solved!";
```

via class

```js
const section = document.querySelector("section");
//example:
section.className = "xxx"; //change the section css class-name to xxx

section.classList.add("xxx"); //add class name.
section.classList.toggle("xxx"); //Toggles between a class name for an element
section.classList.contains("xxx"); //Returns a Boolean value, indicating whether an element has the specified class name.
```

#

### 6.8. creating elements

![find](noteimgs/section6j.png)

**creating via HTML**
(not recommended)

```js
const ulList = document.querySelector("ul");
const p = document.querySelector("p");

p.textContent = "New content"; //rewrite
ulList.innerHTML = "<li>new li<li>"; //rewrite

ulList.innerHTML = ulList.innerHTML + "<li>add li<li>"; //add
//not good for the performance. render other-element you don't want to change.
```

```jsx
p.insertAdjacentHTML(position, text);

<!-- beforebegin --> //Before the element itself.
<p>
  <!-- afterbegin --> //Just inside the element, before its first child.
  foo
  <!-- beforeend --> //Just inside the element, after its last child.
</p>
<!-- afterend --> //After the element itself.
```

**creating via createElement()**

```js
const list = document.querySelector("ul");
const newLi = document.createElement("li"); //create element
newLi.textContent = "4"; //add text to the element

list.appendChild(newLi); //add element to the `ul`, at the end
```

chrome may wrong. append: node, appendChild: element.
![find](noteimgs/section6k.png)

#

### 6.9. **inserting Dom elements**

_`append, before, after` can take multiple nodes  
_`append()`, `prepend()` not support `IE`  
**\*`appendChild()`** not support insert a `node`. (recommended)

```js
ul.appendChild(newLi); //add element in the `ul`, be the last child element

ul.prepend(newLi); //add element in the `ul`, be the first child element
ul.lastElementChild.before(newLi); //before the last child.
ul.lastElementChild.after(newLi);
ul.firstElementChild.replaceWith(newLi); //replace the first child.
```

\*`before, after` not support `IE` & `safari`, so if you want to insert an element to a specific position, use **`insertAdjacentElement`**

```js
const list = document.querySelector("ul");
const secondLi = list.children[1];

const newLi = document.createElement("li");
newLi.textContent = "Number 4";

secondLi.insertAdjacentElement("afterend", newLi); //position same as insertAdjacentHTML
```

```js
list.insertBefore(newLi, firstLi);
//add new element to the `ul`, will be the before the refernceNode.
```

#

### 6.10. cloning dom node

```js
const newLi2 = newLi.cloneNode(true);
//different between true and false?
//false: no nested elements
```

#

### 6.11. live node lists vs static node lists

![find](noteimgs/section6c.png)

example:

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

if you get all the `li` first, add an new element (`<li>4</li>`) to the ul, and get all `li` again after.  
Live node list will get a array `HTMLCollection(4)[]`;  
Static node lists will get a array `NodeList(3)[]`, it is not going to get the new `li` which you just add.  
Look at the example below:
![find](noteimgs/section6l.png)  
\*Live node not means it is better.  
It could lead to a higher memory consumption if you're managing a lot of such collections which change all the time.

#

### 6.12. Removing Element

```js
const list = document.querySelector("ul");

list.remove(); //not work in IE
list.parentElement.removeChild(list); //for all browsers.
```

#

### 6.13. summary for insert, replace, remove

![find](noteimgs/section6m.png)

There are many ways of creating, inserting, replacing and removing DOM elements - here's a summary of the options you have.

For browser support, check the provided links and also the "Browser Support" module you find later in this documents.

**_Create & Insert_**  
You got two main options: Provide an HTML snippet (e.g. via <span style="color: red"> `innerHTML` </span>) to a valid HTML snippet and let the browser render it OR create a DOM object in JS code and append/ insert it manually. The latter approach has the advantage of giving you direct access to the DOM object (useful for setting its properties or adding event listeners). The downside is that you have to write more code.

**_Adding HTML Code:_**

```js
const root = document.getElementById("root-el"); // selects something like <div id="root-el">
root.innerHTML = `
    <div>
        <h2>Welcome!</h2>
        <p>This is all create & rendered automatically!</p>
    </div>
`;
```

Important: Any existing content in <span style="color: red">`root`</span> is completely replaced when using <span style="color: red">`innerHTML`</span>. If you want to append/ insert HTML code, you can use <span style="color: red"> `insertAdjacentHTML` </span>instead: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```js
const root = document.getElementById("root-el"); // selects something like <div id="root-el">
root.insertAdjacentHTML(
  "afterbegin",
  `
    <div>
        <h2>Welcome!</h2>
        <p>This is all create & rendered automatically!</p>
    </div>
`
);
```

**_Creating & Inserting DOM Objects Manually:_**

```js
const someParagraph = document.createElement("p"); // creates a "p" element (i.e. a <p> element)
const root = document.getElementById("root-el"); // selects something like <div id="root-el">
root.append(someParagraph);
```

In this example, we create a paragraph and append it to <span style="color: red">`root`</span> - append means that it's inserted at the end of <span style="color: red">`root`</span> (i.e. inside of it but AFTER all other child nodes it holds).

**_Insertion Methods:_**

<span style="color: red">`append()`</span> => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)

Browser support is decent but for IE, <span style="color: red"> `appendChild()`</span> could be preferred => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

<span style="color: red">`prepend()`</span> => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

Browser support is decent but for IE, <span style="color: red">`insertBefore()`</span> could be preferred => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

<span style="color: red">`before(), after()`</span> => [MDN-Before](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before) & [MDN-After](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after)

Browser support is okay but IE and Safari don't support it. Consider <span style="color: red">`insertBefore()`</span> [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) or <span style="color: red">`insertAdjacentElement()`</span> [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) as substitutes.

Important (no matter how you insert elements): Whenever you insert elements, you **MOVE the element** to that new place if you already inserted it before. It's **NOT copied** (you can copy an element via <span style="color: red">`someElement.cloneNode(true)`</span> though).

**_Replace_**  
You can replace elements in the DOM with two main methods:

<span style="color: red">`replaceWith()`</span> => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith)

<span style="color: red">`replaceChild()`</span> => [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)

<span style="color: red">`replaceWith()`</span> is a bit easier to use and has decent browser support - with IE being the exception. To support that as well, consider using <span style="color: red">`replaceChild()`</span>.

**_Remove_**  
You can remove elements with three main methods:

<span style="color: red">`someElement.innerHTML = ''`</span> => Clears all HTML content of <span style="color: red">`someElement`</span> and hence removes any objects rendered in there.

<span style="color: red">`someElement.remove()`</span> => Removes a single element (<span style="color: red">`someElement`</span>) from the DOM [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove). Browser support is good, IE again doesn't like it though. Use <span style="color: red">`removeChild`</span> (see below) instead.

<span style="color: red">`someElement.parentNode.removeChild(someElement)`</span> => Removes the provided child element (NOT the element on which you call it). Provides broad browser support but of course requires a bit more code [MDN-Link](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild).

**_What about Text Nodes?_**  
You can easily create & insert text nodes in one go:

```js
someElement.textContent = "Hi there!";
```

This creates and inserts the text node with a content of `'Hi there!'`.

Want to append to existing text?

Just use:

```js
someElement.textContent = someElement.textContent + "More text!";
```

#

### 6.14. project

Something need be read again:  
clone dom, replace

```js
confirmDeleteMovieBtn.replaceWith(confirmDeleteMovieBtn.cloneNode(true));
```

bind()

[DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

## 7. Arrays & Iterables

- Creating Arrays
- Important Arrays Methods
- Maps & Sets

#

### 7.1. Creating arrays

![find](noteimgs/section8a.png)

```js
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
```

#

### 7.2. adding & removing

增加/删除 （改变原数组）
push(), unshift(), pop(), shift()

```js
const numbers = [2, 2, 2];

numbers.push(6); //[2, 2, 2, 6]
numbers.unshift(1); //[1, 2, 2, 2, 6]//at the beginning

numbers.pop(); //return [1, 2, 2, 2] delete last one
numbers.shift(); //return [2, 2, 2] delete first one

numbers[1] = 3; //[2, 3, 2]
numbers[6] = 6; //[2, 3, 2, empty × 3, 6]
```

[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#

### 7.3. Selecting Ranges & Creating Copies

slice(), 不会改变原数组

```js
arrayName.splice(startIndexNumber, deleteCount, addItem1, addItem2, ...);
```

```js
const newArray = arrayName.slice(arrayIndexStart, arrayIndexEnd);
//return a new array.
```

concat()  
Return (copy) **`a new array`** after add items at the end. 不改变原数组

```js
const newArray = arrayName.concat([newItem1, newItem2, ...]);
```

#

### 7.4. Retrieving Indexes with indexOf() & lastIndexOf()

return the index number. \*not work for object.

```js
arrayName.indexOf(itemValue); //from first one, return index-number
arrayName.lastIndexOf(itemValue); //from last one
```

#

### 7.5. find() and findIndex()

finding stuff in object.  
`find()` dose not create a copy.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "cherries", quantity: 5 },
];
const result = inventory.find((item, index, items) => {
  return item.name === "cherries";
});

const resultIndex = inventory.findIndex((item, index, items) => {
  return item.name === "cherries";
});
console.log(result, resultIndex);
// { name: 'cherries', quantity: 5 } , 1
```

#

### 7.6. includes()

查找
If cant find, return '-1'.

```js
console.log(arrayName.includes(itemValue)); //return true/false
```

#

### 7.7. sort() and reverse()

排序

```js
const arrayName = [71, 22, 103, 54, 65, 86];
const tax = 0.1;

const newArray = arrayName.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(newArray);
//[22, 54, 65, 71, 86, 103]
```

#

### 7.8. forEach()

```js
const arrayName = [1, 2, 3, 4, 5, 6];
const tax = 0.1;
const newArray = [];

arrayName.forEach((element, idx, elements) => {
  const newElement = { index: idx, number: element + tax };
  newArray.push(newElement);
});
console.log(newArray);
//[{index: 0, number: 1.1}, {index: 1, number: 2.1}, {…}, {…}, {…}, {…}]
```

#

### 7.9. map()

循环，返回新数组，不改变原数组

```js
const arrayName = [1, 2, 3, 4, 5, 6];
const tax = 0.1;

const newArray = arrayName.map((element, idx, elements) => {
  const newElement = { index: idx, number: element + tax };
  return newElement;
});

console.log(newArray);
//[{index: 0, number: 1.1}, {index: 1, number: 2.1}, {…}, {…}, {…}, {…}]
```

#

### 7.10. Filtering Arrays with filter()

筛选,返回新数组，不改变原数组

```js
const arrayName = [71, 22, 103, 54, 65, 86];

const filterArray = arrayName.filter((element, index, elements) => {
  return element > 50;
});
console.log(`copy:`, filterArray); //[71, 103, 54, 65, 86]
```

#

### 7.11. reduce()

处理

```js
const arrayName = [1.1, 2.2, 3, 4, 5, 6];

const sum = arrayName.reduce((prevValue, curValue, index, Elements) => {
  return prevValue + curValue;
}, 0);
console.log(sum); //21.3x
```

#

With all these useful array methods you learned about, it's important to understand how you can combine them. Let's take **`map()`** and **`reduce()`** as an example:

```js
const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const transformedArray = originalArray.map((obj) => obj.price); // produces [10.99, 5.99, 29.99]
const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
```

Of course, you could skip the map step and just add the extraction logic to **`reduce()`**:

```js
const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97
```

But let's say you have a more complex extraction logic and hence want to split this into multiple method calls. Or you have a re-usable map function which you want to be able to use in different places of your app. Then you can still write the initial example in a more concise way if you **leverage method chaining**:

```js
const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum = originalArray
  .map((obj) => obj.price)
  .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
```

We call **`.reduce()`** directly on the result of **`map()`** (which produces an array, that's why this is possible). Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any other place.

#

### 7.12. split() and join()

string to array

```js
const data = "Sydney;Canberra;Melbourne";
const array = data.split(";");
console.log(array); //["Sydney", "Canberra", "Melbourne"]

const nameFragments = ["Max", "Zhang"];
const name = nameFragments.join(" ");
console.log(name); //Max Zhang
```

#

### 7.13. Spread Operator (...)

spread for copy or

```js
const numbers = [1, 2, 3];
const newNumber = [...numbers];

numbers.push(4);
console.log(numbers, newNumber);
//[1, 2, 3, 4]    //[1, 2, 3]
console.log(Math.min(...numbers)); //1
```

**Copy:**  
包括上面的所有复制，object 的 refer 都是相同的。（详情看堆内存详解）  
改变原有 array 的 object 值，复制的 array 也会随之改变。（引申：浅拷贝，深拷贝）

```js
const name = [{ age: 1 }, { age: 2 }];
const newName = [...name];

name.push({ age: 3 });
console.log(name, newName);
//[{age: 1}, {age: 2}, {age: 3}]
//[{age: 1}, {age: 2}]

name[0].age = 4;
console.log(name, newName);
//[{age: 4}, {age: 2}, {age: 3}]
//[{age: 4}, {age: 2}]
```

#

### 7.14. Array Destructuring

```js
const nameFragments = ["Max", "Zhang", "male", 28];
const [firstName, LastName, ...others] = nameFragments;
console.log(firstName, LastName, others);
//Max Zhang ["male", 28]
```

#

### 7.15. maps and sets

3 major iterable data structures.(Array, Set, Map)

![find](noteimgs/section7b.png)
???????????????????????????????????

**Map & object**
![find](noteimgs/section7c.png)

#

### 7.16. WeakSet & WeakMap

#

### 7.17. Question 小问题

\*两个 array 变成一个 object：{array1 : array2}

\*array 前面的 property 名字变换：

```js
const array = [1, 2, 3, 4, 5, 6];
const arrayMonth = ["Jan", "Feb", "Mar", "Apr", "May"];

const mapArray = arrayMonth.map((val) => {
  return { [array[idx] + `月`]: val };
});
console.log(mapArray);
// 0: {1月: "Jan"}
// 1: {2月: "Feb"}
// 2: {3月: "Mar"}
// 3: {4月: "Apr"}
// 4: {5月: "May"}
```

---

## 8. Objects

-

#

### 8.1. Objects & Primitive Values

Objects are **reference values** - you learned that.

It might not have been obvious yet but it's also important to recognize that, in the end, **objects are of course made up of primitive values**.

Here's an example:

```js
const complexPerson = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: 'Some Street 5',
        stateId: 5,
        country: 'Germany',
        phone: {
            number: 12 345 678 9,
            isMobile: true
        }
    },
};
```

Event though **`complexPerson`** has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

**`name`** holds a string (**`'Max'`**) => Primitive value

**`hobbies`** holds an array (i.e. a reference value) which is full of strings (**`'Sports'`**, **`'Cooking'`**) => Primitive values

**`address`** holds an object which in turn holds a mixture of primitive values like **`'Some Street 5'`** and nested objects (**`phone`**), but if you dive into **`phone`**, you find only numbers and booleans in there => **Primitive values**

So you could say: **Primitive values** are the **core building blocks** that hold your data, **objects (and arrays)** are helpful for **organizing** and **working** with that data.

#

### 8.2. Adding, Modifying & Deleting

Adding, Modifying & Deleting Properties

```js
const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};
//person.greet();
person.admin = true;
delete person.age;
console.log(person);
//{name: "Max", hobbies: Array(2), admin: true, greet: ƒ}
```

### 8.3. Dynamic Property Access & Setting Properties Dynamically

Property Types & Property Order

```js
const person = {
  99: 20,
  1: 30,
};
console.log(person); //return {1: 30, 99: 20}
//1 will be the first one. only numbers.
```

```js
const person = {
  "first name": "Max",
  1.9: 30,
};

console.log(person["first name"]); //Max
console.log(person[1.9]); //30
```

```js
const propKey = "field 12";
const person = {
  [propKey]: "Max",
};
console.log(person["field 12"]);
```

**output dynamic properties**

```js
const movie = {
  info: {
    title: newTitle,
    [newExtraName]: newExtraValue,
  },
  id: Math.random(),
};

movies.forEach((movie) => {
  const movieEleLi = document.createElement("li");
  let text = movie.info.title + " - ";
  for (const key in movie.info) {
    if (key !== "title") {
      text = text + `${key} : ${movie.info[key]}`;
    }
  }
  movieEleLi.textContent = text;
  movieList.appendChild(movieEleLi);
});
```

#

### 8.4. shorthand property syntax

```js
const newObject = {
  propertyName: propertyName,
  //same as
  propertyName1,
};
```

#

### 8.5. filter

```js
const movie = {
  info: {
    title: newTitle,
  },
};

const filterText = document.getElementById("filter-title").value;

const filterMovie = !filterText
  ? movies
  : movies.filter((movie) => movie.info.title.includes(filterText));
```

#

### 8.6. chaining

xx.xx.xx

```js
const movie = {
  info: {
    title: newTitle,
  },
};

console.log(movie.info.title);
```

#

### 8.7. Object Spread Operator

**(...)**  
[link to array](#713-Spread-Operator)

#

### 8.8. Object.assign()

Deep copy

#

### 8.9. Object Destructuring

```js
const movie = {
  info: {
    title: "New",
  },
  id: 123,
};
const { info, ...others } = movie;
console.log(info.title); //New
console.log(others); //{id: 123}

//rename
const { info: newInfo, ...others } = movie;
console.log(newInfo.title); //New
```

#

### 8.10. Checking for Property existence

```js
const movie = {
  info: {
    title: "New",
  },
};
if ("info" in movie) {
}
```

#

### 8.11. this

**Very important part!!!**  
关于 this 的详解，网上有很多解释得特别好的文章。毕竟面试必问。推荐直接看下列文章。这章的笔记请无视。  
[45 Question about this](https://juejin.im/post/5e6358256fb9a07cd80f2e70)  
[This 关键字](https://github.com/koala-coding/goodBlog/blob/master/docs/javascript/this.md)  
[what is context?](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)  
[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md), [CN](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/this%20%26%20object%20prototypes/ch2.md)

**避免使用的场景**  
根据箭头函数的特性，所以我们应该避免在以下四种场景中使用它：

1. 使用箭头函数定义对象的方法

```js
let obj = {
  value: "LinDaiDai",
  getValue: () => console.log(this.value),
};
obj.getValue(); // undefined
```

2. 定义原型方法

```js
function Foo(value) {
  this.value = value;
}
Foo.prototype.getValue = () => console.log(this.value);

const foo1 = new Foo(1);
foo1.getValue(); // undefined
```

3. 构造函数使用箭头函数

```js
const Foo = (value) => {
  this.value = value;
};
const foo1 = new Foo(1);
// 事实上直接就报错了 Uncaught TypeError: Foo is not a constructor
console.log(foo1);
```

4. 作为事件的回调函数

```js
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log(this === window); // => true
  this.innerHTML = "Clicked button";
});
```

**5 rules with this binding - call site**

- Default Binding
- Implicit Binding
- Explicit Binding
- New Binding
- arrow function binding

```js
const dragon = {
  weapon: "fire",
  attack: function () {
    console.log(`attacking with ${this.weapon}`);
  },
};
dragon.attack(); //第一:attacking with fire
const abc = dragon.attack;
abc(); //第二:attacking with undefined
const abc2 = "defined?: " + dragon.attack(); //第三:attacking with fire
console.log(abc2); //defined?: undefined
```

第一种情况，this 指的是 object(dragon), 所以输出的值是 attacking with fire.  
第二种情况，会返回 undefined(window?)，因为只是赋予了变量 **abc** 一个 function，当执行 abc 的时候，this 前面没有 object,返回 undefined。

第三种情况（谁会这么写？？？为了防止不懂，解释一下。。。），当 **abc2** 定义的时候，**`dragon.attack()`**后面加括号，等于立马执行了这个函数，所以会出现 attacking with fire 的结果，但是当再次读取 abc2 时候，会是 undefined。

- return

![find](noteimgs/section8b.png)

#

### 8.12. bind()

Bind is useful whenever you want to pre-configure a function for the **`future execution`**

#

### 8.13. call() & apply()

executing the function **`right away`**

```js
function.call(this, argArray,argArray...);
function.apply(this, [Array]);
```

#

### 8.14. getter and setter

```js
const newTitle = "Default";

const movie = {
  info: {
    set title(value) {
      if (value.trim() === "") {
        this._title = "undefined";
        return;
      }
      this._title = value;
    },
    get title() {
      return this._title;
    },
  },
  id: Math.random(),
};

movie.info.title = "Java";
console.log(movie.info.title); //Java
```

---

## 9. Classes & Object-oriented Programming (OOP)

- what is OOP
- class & instances
- properties, fields & methods
- inheritance

#

### 9.1. OOP

#

### 9.2. class

```js
class Product {
  // title;
  constructor(title) {
    this.title = title;
  }
  render() {
    return;
  }
}
```

#

### 9.3. Field vs Properties

![find](noteimgs/section9a.png)
Fields are in the end simply translated to properties you would otherwise set up in the constructor method.

#

### 9.4. class with 'this'

#

### 9.5. Static Methods & Properties

static/instance
![find](noteimgs/section9b.png)

#

### 9.6. classes vs object

![find](noteimgs/section9c.png)

#

### 9.7. getter and setter

#

### 9.8. inheritance

![find](noteimgs/section9d.png)

constructor(); 创建实例的时候的数据传值
super(); 从父级拿数据

**overriding methods**

![find](noteimgs/section9e.png)  
Add the **'product'** to the **DOM**, but you render the 'DOM' after you add(create) 'product'.  
(254, 4:12)

**super() constructor**

#

### 9.9. Private Properties

A property should be used internally only.

#

### 9.10. instanceof

#

### 9.11. Object Descriptors

```js
Object.getOwnPropertyDescriptors(ObjectName);

Object.defineProperty(person, "name", {
  configurable: true,
  enumerable: true,
  value: "Max",
  writable: false,
});
//this is a way to change/locking down the property
```

#

### 9.12. Question

the class itself is not the object. objects based on classes.

[MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## 10. Constructor Functions & Prototypes

![find](noteimgs/section10a.png)
原型链

#

### 10.1. class and constructor functions

Syntactical sugar

#

### 10.2. Prototype

super important!
![find](noteimgs/section10b.png)
![find](noteimgs/section10c.png)
![find](noteimgs/section10d.png)

![find](noteimgs/section10e.png)

---

## 11. Practice: OOP & Classes

---

## 12. More about DOM & Browser APIs

---

## 13. Events

---

## 14. Advanced Function Concepts

---

## 15. More about Numbers & Strings

---

## 16. Asynchronous/Async JS: Promises & Callbacks

---

## 17. Background Http (Ajax)

---

## 18. 3rd Party Libraries

---

## 19. JavaScript Modules

---

## 20. Tooling (Webpack, Babel, …)

---

## 21. Working with Browser Storage

---

## 22. Browser Support

---

## 23. Practice

---

## 24. JavaScript Frameworks

---

## 25. Meta-programming: Symbols, Iterators, Generators, Reflect API & Proxy API

---

## 26. NodeJS Introduction

---

## 27. Security

---

## 28. Deployment

---

## 29. Performance Optimizations & Memory Leaks

---

## 30. Testing

---

## 31. Bonus: Programming Paradigms (Procedural vs Object Oriented vs Functional)

---

## 32. Bonus: Data Structures & Algorithms Introduction

---

## 33. Bonus: TypeScript Introduction

---

## 34. Bonus: Web Components

---

## 35. Roundup & Next Steps

---

## 36. Efficient Development & Debugging

### 36.1. Overview

![find](noteimgs/section36a.png)

#

### 36.2. IDE

color,theme, Icon, extensions,

**Shortcuts**  
Toggle block comment: `option + shift + a` ;  
Toggle line comment: `cmd + /`;  
Add Selection To Next Find Match: `cmd+d`;  
Add Selection all Match: `cmd + shift + L`;  
move line: `option + top/button`;  
copy line: `option + shift + top/button`;  
delete whole line: `shift + cmd + K`

**auto-completion**

open the suggestion: `control + space`;  
hints: `shift + cmd + space`;

#

### 36.3. Find Help

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

#

### 36.4. debug

`console.log()`,
`breakpoint` with IDE and chrome.

https://medium.com/@jbbpatel94/difference-between-offsetheight-clientheight-and-scrollheight-cfea5c196937

#

### 36.5. Need be careful

- `this`
- `let` & `const` (let for changing value)

#project

- **project 1**  
  about basics js.
- **project 2**  
  if, &&, loop, switch(break & continue), try-catch
- **project 3**  
  DOM(add, delete...)
- **project 4**  
  object
- **project 5**

//react

https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js
https://unpkg.com/react@16.8.6/umd/react.development.js
