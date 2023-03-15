interface IShape {
    getArea(): number;
    sumSide(side1: number, side2: number): number;
    sumSide(side1: string, side2: string): string;
}   
  
class Shape implements IShape {
    public side1: number;
    public side2: number;
    
    constructor(side1: number, side2: number) {
        this.side1 = side1;
        this.side2 = side2;  
    }
    
    getArea(): number {
        return -1; //default value
    }

    // overloading
    public sumSide(side1: any, side2: any): any {
        return side1 + side2;
    }
}

class Triangle extends Shape {       
    constructor(side1: number, side2: number) {
        super(side1, side2);
    }

    getArea(): number {
        return this.side1 * this.side2 * 0.5;
    }
}

class Rectangle extends Shape {
    
    constructor(side1: number, side2: number) {
        super(side1, side2);
    }
    
    // Override
    getArea(): number {
      return this.side1 * this.side2;
    }
}
  
class Circle implements IShape {
    private diameter: number;
    
    constructor(diameter: number) {
        this.diameter = diameter;
    }
    
    getArea(): number {
        return Math.PI * Math.pow(this.diameter * 0.5, 2);
    }
    
    setDiameter(diameter: number) {
        this.diameter = diameter;
    }

    public sumSide(side1: any, side2: any): any {
        return side1 + side2;
    }
}
  
let triangle = new Triangle(2, 3);
let rectangle = new Rectangle(4, 6);
let circle = new Circle(5);
let sum = new Shape(1, 2);
  
console.log("Triangle Area: " + triangle.getArea());
console.log("Rectangle Area: " + rectangle.getArea());
console.log("Circle Area: " + circle.getArea());
console.log("Sum: " + sum.sumSide('a', 'b'));

circle.setDiameter(10);
console.log("Circle Area1: " + circle.getArea());