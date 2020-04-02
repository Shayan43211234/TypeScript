var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.name = function (name) {
        this.myname = name;
        console.log(name);
    };
    MyClass.prototype.age = function (age) {
        age = age;
        console.log(age);
    };
    return MyClass;
}());
var ExtendsClass = /** @class */ (function (_super) {
    __extends(ExtendsClass, _super);
    function ExtendsClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendsClass.prototype.roll = function (roll, age) {
        roll = roll;
        console.log(roll);
        _super.prototype.age.call(this, age);
    };
    return ExtendsClass;
}(MyClass));
var object = new ExtendsClass();
object.roll(35, "21");
object.name("Shayan");
