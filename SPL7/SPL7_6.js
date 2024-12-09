 const item = {};
Object.defineProperty(item, 'price', {
  value: 100, 
  writable: true,
  configurable: true,
  enumerable: true 
});

 console.log(item.price); 
item.price = 200; 
console.log(item.price); 

Object.defineProperty(item, 'price', {
  writable: false,
  configurable: false
});


item.price = 300;
console.log(item.price); 

 delete item.price;
console.log(item.price); 

