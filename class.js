var MyClass = /** @class */ (function () {
    function MyClass(name, roll, salary, age) {
        this.name = name;
        this.age = age;
        console.log("my name is " + name + "\nage is " + age);
        this.getRoll(roll, salary);
    }
    MyClass.prototype.getRoll = function (roll, salary) {
        this.roll = roll;
        console.log("my roll no is " + roll);
        this.getSalary(salary);
    };
    MyClass.prototype.getSalary = function (salary) {
        this.salary = salary;
        console.log("and my salary is " + salary);
    };
    return MyClass;
}());
var myclass = new MyClass("Shayan", 35, 5000, 21);
