 const car = {};
Object.defineProperties(car, {
  make: {
    value: "Audi",
    writable: true, 
    configurable: true,
    enumerable: true 
  },
  model: {
    value: "A6",
    writable: true, 
    configurable: true,
    enumerable: true 
  },
  year: {
    value: 1996,
    writable: true, 
    configurable: true,
    enumerable: true 
  }
});

console.log(car.make); 
car.make = "Mersedes-Benz";
console.log(car.make); 
delete car.model;
console.log(car.model);

 car.model = "E-Class";
console.log(car.model); 

 Object.defineProperties(car, {
  make: {
    writable: false,
    configurable: false
  },
  model: {
    writable: false, 
    configurable: false
  },
  year: {
    writable: false, 
    configurable: false
  }
});

 car.make = "BMW"; 
console.log(car.make);

delete car.year;
console.log(car.year); 
