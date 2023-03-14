// Class example

// class Greeter {
//     greeting: string;
   
//     constructor(greeting: string) {
//         this.greeting = greeting;
//     }
   
//     greet() {
//         return "Hello " + this.greeting;
//     }
// }
   
// let greeter = new Greeter("World!");
// console.log(greeter.greet());


// -----------------------------------------------------------------------------------------

// Public

// class Animal {
//     /*Public member*/
//     public name: string

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// /*Init instance*/
// let dog = new Animal('Milu');
// /*Access public member*/
// console.log(dog.name);


// -----------------------------------------------------------------------------------------

// Private

// Example 1:

// class Animal {
//     private _name: string;

//     constructor(name: string) {
//         this._name = name;
//     }

//     name() {
//         return this._name;
//     }

// }

// let dog = new Animal('Milu');
// console.log(dog.name());

// Example 2:

// class Employee {
//     public code: number;
//     private name: string;

//     constructor (code: number, name: string) {
//         this.code = code;
//         this.name = name;
//     }

//     public display() {
//         return (`My code: ${this.code}, My name: ${this.name}`);
//     }
// }

// let employee = new Employee(283, "Bao Thai");
// console.log(employee.display());


// -----------------------------------------------------------------------------------------

// Protected

// class Employee {
//     public code: number;
//     protected name: string;

//     constructor (code: number, name: string) {
//         this.code = code;
//         this.name = name;
//     }
// }

// class Person extends Employee {
//     private department: string;

//     constructor (code: number, name: string, department: string) {
//         super(code, name);
//         this.department = department;
//     }

//     public display() {
//         return (`My code: ${this.code}, my name: ${this.name} and I am in ${this.department}`);
//     }
//  }

//  let person = new Person(283, "Bao Thai", "QA Auto");
//  console.log(person.display());


// -----------------------------------------------------------------------------------------

// Exercise:

interface Shape {
    getArea(): number;
}
  
class Triangle implements Shape {
    base: number;
    height: number;
    
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    getArea(): number {
      return this.base * this.height * 0.5;
    }
  }
  
class Rectangle implements Shape {
    length: number;
    width: number;
    
    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }
    
    getArea(): number {
      return this.length * this.width;
    }
  }
  
class Circle implements Shape {
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
}
  
let t = new Triangle(1.5, 2.5);
let r = new Rectangle(1.5, 2.5);
let c = new Circle(5);
  
console.log("Triangle Area: " + t.getArea());
console.log("Rectangle Area: " + r.getArea());
console.log("Circle Area: " + c.getArea());
