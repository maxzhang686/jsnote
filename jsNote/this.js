// let weapon = 10;

// const dragon = {
//   weapon: 'fire',
//   attack: function() {
//   console.log(`attacking with ${this.weapon}`);
//   }
// }
// dragon.attack();//第一
// const abc = dragon.attack;
// abc();//第二
// const abc2 = 'defined?: ' + dragon.attack();//第三attacking with fire
// console.log(abc2);//defined?: undefined

// const dragon1 = {
//   weapon: 'fire',
//   attack: function() {
//   return this.weapon;
//   }
// }
// console.log(dragon1.attack());

// const dragon2 = {
//   weapon: 'fire',
//   attack: function() {
//   this.weapon;
//   }
// }
// console.log(dragon2.attack());

// let a = 5;
// let obj = {
//   a : 10,
//   foo : function(){
//     console.log(this.a)
//   }
// };

// let bar = obj.foo;
// obj.foo();
// bar();
// console.log(bar)


// const slowMotion = {
//   action: 'jumping off the building...',
//   play: function() {
//   const callback = () => { console.log(`${this.action} after 2 seconds`); };
//   setTimeout(callback, 2000);
//   }
//   }


/* 
//1
var length = 10;
function fn() {
    console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
 
obj.method(fn, 1);

//2
 */


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const items = ['l','i'];


//   result = result.filter(word => word.includes(key));

// for (const key of items) {
//   const result = words.filter(word => word.includes(key));
//   result1.push(result)
// }
let result = words; 
for (const key of items) {
  result = result.filter(word => word.includes(key));
}
console.log(result);


let result1 = []
for (const key of items) {
  words.map((word) => { if (word.includes(key)) {
    result1.push(word)  
  }})
}
console.log(result1);



