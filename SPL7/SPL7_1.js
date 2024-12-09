const person = {
    name: "Roma", 
    age: 18, 
    
    
    greet() {
      console.log(`Привет, меня зовут ${this.name}!`);
    },
    
    ageAfterYears(years) {
      return this.age + years;
    }
  };
  person.greet();
  console.log(`Возраст через 5 лет: ${person.ageAfterYears(5)}`); 
  