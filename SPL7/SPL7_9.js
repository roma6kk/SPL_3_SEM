const numbers = [1, 2, 3];

 Object.defineProperty(numbers, 'sum', {
  get() {
    return this.reduce((acc, num) => acc + num, 0);
  },
  enumerable: true,
  configurable: false 
});

 console.log(numbers.sum); 

 numbers.sum = 10; 
console.log(numbers.sum);

 delete numbers.sum; 
console.log(numbers.sum); 
