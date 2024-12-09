const rectangle = {
    _width: 0, 
    _height: 0,
  
     get width() {
      return this._width;
    },
  
     set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.error("Ширина должна быть положительным числом!");
      }
    },
  
     get height() {
      return this._height;
    },
  
     set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.error("Высота должна быть положительным числом!");
      }
    },
  
     get area() {
      return this._width * this._height;
    }
  };
  
  rectangle.width = 5;  
  rectangle.height = 10; 
  
  console.log(`Ширина: ${rectangle.width}`);
  console.log(`Высота: ${rectangle.height}`);
  console.log(`Площадь: ${rectangle.area}`); 
  
   rectangle.width = -3;  
  console.log(rectangle.width);
  
  rectangle.height = -5;
  console.log(rectangle.height);
  