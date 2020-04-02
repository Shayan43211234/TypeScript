var MyInterfaceClass = /** @class */ (function () {
    function MyInterfaceClass() {
        this.MyFirstName = "";
    }
    MyInterfaceClass.prototype.MyInterfaceFunction = function (MyFirstName, MyAge) {
        this.MyFirstName = MyFirstName;
        this.MyAge = MyAge;
        console.log("My name is " + MyFirstName + " and my age is " + MyAge);
    };
    return MyInterfaceClass;
}());
var instance = new MyInterfaceClass();
instance.MyInterfaceFunction("Shayan", 21);
var AgainMyInterfaceClass = /** @class */ (function () {
    function AgainMyInterfaceClass() {
        this.MyName = "Shayan";
        this.MyAgeAgain = 21;
        this.MyObject = {
            MyNameAgain: this.MyName,
            MyAgeAgain: this.MyAgeAgain
        };
        this.AgainMyInterfaceFunction = function (MyObject) {
            console.log(MyObject.MyNameAgain);
            console.log(MyObject.MyAgeAgain);
        };
    }
    return AgainMyInterfaceClass;
}());
var AgainInstance = new AgainMyInterfaceClass();
AgainInstance.AgainMyInterfaceFunction({ MyNameAgain: "Shayan Mukherjee", MyAgeAgain: 21 });
