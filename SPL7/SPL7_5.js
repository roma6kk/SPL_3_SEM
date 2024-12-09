const counter = (function () {
    return {
      count: 0, 
  
      increment() {
        this.count++; 
        return this.count; 
      },
  
      decrement() {
        this.count--;  
        return this.count;  
      },
  
      getCount() {
        return this.count;
      }
    };
  })();
  
  
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.decrement());
  console.log(counter.getCount());
  