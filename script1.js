//2. Circle - Class
//Convert the UML diagram to Typescript class. - use number for double
//Ans:
//Input:
class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    getcolor() {
      return this._color;
    }
  
    setcolor(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      var a=Math.PI * Math.pow(this._radius, 2);
      return a.toFixed(2);
    }
  
    getCircumference() {
      var b= 2 * Math.PI * this._radius;
      return b.toFixed(2);
    }
  }
  
  const circle1 = new Circle(4, "green");
  const circle2 = new Circle(5, "Yellow");
  
  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  console.log("Color:",circle1.getcolor());
  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
  console.log("Color:",circle2.getcolor());
  //Output:
  //Circle 1:
  Circle [radius = 4 , color = green]
  Area: 50.27
  Circumference: 25.13
  Color: green
  //Circle 2:
  Circle [radius = 5 , color = Yellow]
  Area: 78.54
  Circumference: 31.42
  Color: Yellow
