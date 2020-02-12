# JavaScript

- [1. Getting Started](#1-getting-started)
- [2. Language Basics, Base Syntax](#2-language-basics-base-syntax)
- [3. Efficient Development & Debugging](#3-efficient-development--debugging)
- [4. Control Structures (if, Loops, Error…)](#4-control-structures-if-loops-error)
- [5. Behind the Scenes of JS  The (Weird) Past (ES3, ES5) & Present (ES6+)](#5-behind-the-scenes-of-js--the-weird-past-es3-es5--present-es6)
- [6. A Closer Look at Functions](#6-a-closer-look-at-functions)
- [7. DOM Basics](#7-dom-basics)
- [8. Arrays & Iterables](#8-arrays--iterables)
- [9. Objects](#9-objects)
- [10. Classes & Object-oriented Programming (OOP)](#10-classes--object-oriented-programming-oop)
- [11. Constructor Functions & Prototypes](#11-constructor-functions--prototypes)
- [12. Practice: OOP & Classes](#12-practice-oop--classes)
- [13. More about DOM & Browser APIs](#13-more-about-dom--browser-apis)
- [14. Events](#14-events)
- [15. Advanced Function Concepts](#15-advanced-function-concepts)
- [16. More about Numbers & Strings](#16-more-about-numbers--strings)
- [17. Asynchronous/Async JS: Promises & Callbacks](#17-asynchronousasync-js-promises--callbacks)
- [18. Background Http (Ajax)](#18-background-http-ajax)
- [19. rd Party Libraries](#19-rd-party-libraries)
- [20. JavaScript Modules](#20-javascript-modules)
- [21. Tooling (Webpack, Babel, …)](#21-tooling-webpack-babel-)
- [22. Working with Browser Storage](#22-working-with-browser-storage)
- [23. Browser Support](#23-browser-support)
- [24. Peactice](#24-peactice)
- [25. JavaScript Frameworks](#25-javascript-frameworks)
- [26. Meta-programming: Symbols, Iterators, Generators, Reflect API & Proxy API](#26-meta-programming-symbols-iterators-generators-reflect-api--proxy-api)
- [27. NodeJS Introduction](#27-nodejs-introduction)
- [28. Security](#28-security)
- [29. Deployment](#29-deployment)
- [30. Performance Optimizations & Memory Leaks](#30-performance-optimizations--memory-leaks)
- [31. Testing](#31-testing)
- [32. Bonus: Programming Paradigms (Procedural vs Object Oriented vs Functional)](#32-bonus-programming-paradigms-procedural-vs-object-oriented-vs-functional)
- [33. Bonus: Data Structures & Algorithms Introduction](#33-bonus-data-structures--algorithms-introduction)
- [34. Bonus: TypeScript Introduction](#34-bonus-typescript-introduction)
- [35. Bonus: Web Components](#35-bonus-web-components)
- [36. Roundup & Next Steps](#36-roundup--next-steps)autoauto



## 1. Getting Started
### 1.1. Dynamic vs Weakly Typed Languages


## 2. Language Basics, Base Syntax
### 2.1. Variables & Constants
![find](noteimgs/section1a.jpg)

 variable: A data container where the data can be changed during program execution.

### 2.2. Declaring & Defining
![find](noteimgs/section1b.png)

### 2.3. Operators
![find](noteimgs/section1c.png)

```js
number = number + newNumber; //same as:
number += newNumber

number = number + 1; //same as:
numebr++;
```

### 2.4. Some data types 
![find](noteimgs/section1d.png)

**String**  
Javascript template literal `(``)`. [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
```js
let currentResult = "(" + defaultResult + "+ 10) * 3 / 2 -1";
let currentResult = `(${defaultResult} + 10) * 3 / 2 -1`;
```

string Escape notation.[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)  

* css: `white-space: pre`.



### 2.5. Function
![find](noteimgs/section1e.png)

A function defines code which doesn't execute right away but which can be executed multiple times by calling the function.  
A function is "code on demand".  
Function parameters are Data that can be provided to the function (input) - available only inside of the function, like local variables.

defines
```js
function functionName(parameter1, parameter2){
  const result = parameter1 + parameter2;
  alert(`The resule is ${result}`)
}
```
call function
```js
functionName()
```

* Build-in function
alert(), addEventListener(), 

* Most importantly: A function is not "an alternative to a variable". It supports a totally different use-case. But it's also worth pointing out that variables are NOT restricted to storing numbers or strings.

### 2.6. "Indirect" vs "Direct" Function Execution

<!-- scope and closures!!!(other section explain more) -->

It can be confusing to see that there seem to be two ways of executing a function:
```js
function add() {
  something = someNum + someOtherNum;
}
```
`add()` vs `add`

It's important to understand why we have these "two ways"!

**In general**, you call a function that you defined by **using its name** (e.g. `add`) and **adding parentheses** (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> **`add()`**

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

**Sometimes however**, you **don't want to execute the function immediately**. You rather want to "tell JavaScript" that it should execute a certain function **at some point in the future** (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> **`someButton.addEventListener('click', add);`**

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

**`someButton.addEventListener('click', add());`** would be wrong.

Why? Because JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses => That means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:
```js
let someVar = 5;
add
alert('Do something else...');
```
Why?

Because you just throw the name of the function in there but **you don't give any other information to JavaScript**. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.



### 2.7. return
```js
function functionName(parameter1, parameter2){
  const result = parameter1 + parameter2;
  return result;
}
```
Any code that have write after `return`, won't execute.  


### 2.8. scope and closures

You can't use local/block-scope variables(= declared inside of functions) outside of them.

**shadowing**

What happens if you have this code?
```js
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
```
This will actually show an alert that says `'Max'` (NOT `'Manu'`).

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is **not allowed on the same level/ in the same scope**.

So this would fail:
```js
let userName = 'Max';
let userName = 'Manu';
```
Why does it work in the first code snippet though?

Because we first create a global variable `userName` via
```js
let userName = 'Max';
```
But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their **own scope**, JavaScript does something which is called **"shadowing"**.

It **creates a new variable on a different scope** - this variables does not overwrite or remove the global variable by the way - **both co-exist**.

When referring to `userName` inside of the `greetUser` function we now **always refer to the local, shadowed variable**. Only **if no such local variable existed, JavaScript would fall back to the global variable**.

### 2.9. Converting Data Types
change the string to number.
```js
parseInt(10);
parseFloat(10.1);
```
also work as 

```js
result + +userInput.value = result + parseInt(userInput.value)
```

change the number to string.
```js
result.toString()
```

You saw the example with a number and a "text number" being added

`3 + '3' => '33'`

in JavaScript.

That happens because the + operator also supports strings (for string concatenation).

It's the only arithmetic operator that supports strings though. For example, this will not work:

`'hi' - 'i' => NaN`

`NaN` is covered a little later, the core takeaway is that you can't generate a string of 'h' with the above code. Only + supports both strings and numbers.

Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

`3 * '3' => 9`

Please note: It yields the number (!) 9, NOT a string '9'!

Similarly, these operations also all work:

`3 - '3' => 0`

`3 / '3' => 1`

Just `3 + '3'` yields `'33'` because here JavaScript uses the "I can combine text" mode of the + operator and generates a string instead of a number.


### 2.10. arrays
Section 8 will explain more. [link](#8-arrays--iterables)
```js
newArray = [1, 2, 3]；
newArray.push("4")；
console.log(newArray[0]);
```

### object 
Section 9 will explain more. [link](#9-objects)



## 3. Efficient Development & Debugging
## 4. Control Structures (if, Loops, Error…)
## 5. Behind the Scenes of JS  The (Weird) Past (ES3, ES5) & Present (ES6+)
## 6. A Closer Look at Functions
## 7. DOM Basics
## 8. Arrays & Iterables
## 9. Objects
## 10. Classes & Object-oriented Programming (OOP)
## 11. Constructor Functions & Prototypes
## 12. Practice: OOP & Classes
## 13. More about DOM & Browser APIs
## 14. Events
## 15. Advanced Function Concepts
## 16. More about Numbers & Strings
## 17. Asynchronous/Async JS: Promises & Callbacks
## 18. Background Http (Ajax)
## 19. rd Party Libraries
## 20. JavaScript Modules
## 21. Tooling (Webpack, Babel, …)
## 22. Working with Browser Storage
## 23. Browser Support
## 24. Peactice
## 25. JavaScript Frameworks
## 26. Meta-programming: Symbols, Iterators, Generators, Reflect API & Proxy API
## 27. NodeJS Introduction
## 28. Security
## 29. Deployment
## 30. Performance Optimizations & Memory Leaks
## 31. Testing
## 32. Bonus: Programming Paradigms (Procedural vs Object Oriented vs Functional)
## 33. Bonus: Data Structures & Algorithms Introduction
## 34. Bonus: TypeScript Introduction
## 35. Bonus: Web Components
## 36. Roundup & Next Steps