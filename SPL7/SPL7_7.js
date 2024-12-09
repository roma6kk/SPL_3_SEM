const circle = {
    _radius: 0, 
  
    get radius() {
      return this._radius;
    },
  
    set radius(value) {
      if (value > 0) {
        this._radius = value;
      } else {
        console.error("Радиус должен быть положительным числом!");
      }
    },
  
    get area() {
      return Math.PI * this._radius ** 2;
    }
  };
  
  circle.radius = 5; 
  console.log(`Радиус: ${circle.radius}`); 
  console.log(`Площадь: ${circle.area}`);
  
  circle.radius = -3; 
  console.log(`Радиус: ${circle.radius}`); 
  