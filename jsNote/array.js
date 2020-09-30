const array = {cpu: 10, case: 18, gpu: 99};

var input = { 
  cpu : "mango",
  gpu   : "carrot"
} 

var output = [];

for (var type in input) {
  item = {};
  item[type] = input[type];
  output.push(item);
}

// display result
console.log(JSON.stringify(output));