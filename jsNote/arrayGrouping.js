const childProducts = [
    {
      "id": 10,
      "name": "CPU i9 9900k",
      "title": "Intel 1151 9th Gen Processors",
      "category": "cpu",
      "price": 866.0,
      "pictureUrl": "https://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": false,
     },
    {
      "id": 18,
      "name": "Case 15",
      "description": "Intel 1151 9th Gen Processors",
      "category": "case",
      "price": 180.0,
      "pictureUrl": "https://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": true,
    },
    {
      "id": 6,
      "name": "CPU i7 9700",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.",
      "category": "cpu",
      "price": 666.0,
      "pictureUrl": "https://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": true,
    },
    {
      "id": 17,
      "name": "Case M15x-R2",
      "description": "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
      "category": "case",
      "price": 150.0,
      "pictureUrl": "ihttps://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": false,
    },
    {
      "id": 99,
      "name": "2070 super",
      "title": "Intel 1151 9th Gen Processors",
      "category": "gpu",
      "price": 866.0,
      "pictureUrl": "https://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": true,
     },
    {
      "id": 88,
      "name": "2080 super",
      "description": "Intel 1151 9th Gen Processors",
      "category": "gpu",
      "price": 180.0,
      "pictureUrl": "https://i.ibb.co/6sFDDxJ/9700k.jpg",
      "isPublished": true,
      "default": false,
    },
  ];

const mapChildrenProducts = function(arr){
  let components = {};
  arr.forEach((items,index) => {
      let products = components[items.category] || [];
      if(items.default){
        products = items.price;
      }
      components[items.category] = products;
  })
  return components;
}
console.log(mapChildrenProducts(childProducts));


const data1 = { cpu: 6, case: 5, gpu: 10 }

const setPrice =function(data){
  let count = 0;
  for (let value in data) {
    count += data[value]
  }
  return count;
}

console.log(setPrice(data1))




const mapChildrenProducts_new = function(arr) {
  let components = [];
  arr.forEach((items, i) => {
      let index = -1;
      let alreadyExists = components.some((newItem, j) => {
          if (items.category === newItem.category) {
              index = j;
              return true;
          }
      });
      if (!alreadyExists) {
        components.push({
              category: items.category,
              itemsList: [items]
          });
      } else {
        components[index].itemsList.push(items);
      }
  });
  return components;
};

console.log(mapChildrenProducts_new(childProducts));
// console.log(mapChildrenProducts_new(childProducts)[0].itemsList);

var arr = [
  {city: "上海", location: "浦东"},
  {city: "上海", location: "静安"},
  {city: "北京", location: "内环"},
  {city: "北京", location: "五环"},
  {city: "苏州", location: "苏州"},
  ];

  const mapCityLoction = function(arr) {
    let cities = {};
    arr.forEach((address, index) => {
        let locations = cities[address.city] || [];
        locations.push(address.location);
        cities[address.city] = locations;
    })
    return cities;
}

const mapCityLoction_new = function() {
  let newArr = [];
  arr.forEach((address, i) => {
      let index = -1;
      let alreadyExists = newArr.some((newAddress, j) => {
          if (address.city === newAddress.city) {
              index = j;
              return true;
          }
      });
      if (!alreadyExists) {
          newArr.push({
              city: address.city,
              location: [address.location]
          });
      } else {
          newArr[index].location.push(address.location);
      }
  });
  return newArr;
};

console.log(mapCityLoction(arr));

console.log(mapCityLoction_new(arr));