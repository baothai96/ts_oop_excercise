// Class example
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return this.base * this.height * 0.5;
    };
    return Triangle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(diameter) {
        this.diameter = diameter;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.diameter * 0.5, 2);
    };
    Circle.prototype.setDiameter = function (diameter) {
        this.diameter = diameter;
    };
    return Circle;
}());
var t = new Triangle(1.5, 2.5);
var r = new Rectangle(1.5, 2.5);
var c = new Circle(5);
console.log("Triangle Area: " + t.getArea());
console.log("Rectangle Area: " + r.getArea());
console.log("Circle Area: " + c.getArea());
