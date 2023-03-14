// Hello World!
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let message: string = 'Hello World!';
// console.log(message);
// ---------------------------------------------------
// Abstract
var Shape = /** @class */ (function () {
    function Shape(name) {
        this._name = name;
    }
    Shape.prototype.draw = function () {
        console.log("pre drawing " + this._name);
        this.drawShape();
    };
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, length) {
        var _this = _super.call(this, name) || this;
        _this._length = length;
        return _this;
    }
    //must implement super class abstract methods
    Square.prototype.drawShape = function () {
        console.log("drawing square with length " + this._length);
    };
    return Square;
}(Shape));
//let shape: Shape = new Shape(); error TS2511: Cannot create an instance of an abstract class.
var shape = new Square("saure", 5);
shape.draw();
