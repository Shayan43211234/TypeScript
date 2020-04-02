var MyNameSpace;
(function (MyNameSpace) {
    var AgainMyNameSpace;
    (function (AgainMyNameSpace) {
        var MyClass = /** @class */ (function () {
            function MyClass(name, title) {
                this.name = name;
                this.title = title;
                console.log("my name is " + name + " " + title);
            }
            return MyClass;
        }());
        AgainMyNameSpace.MyClass = MyClass;
    })(AgainMyNameSpace = MyNameSpace.AgainMyNameSpace || (MyNameSpace.AgainMyNameSpace = {}));
})(MyNameSpace || (MyNameSpace = {}));
var MyNameSpaceSecond;
(function (MyNameSpaceSecond) {
    var MyClass = /** @class */ (function () {
        function MyClass(name, title) {
            this.name = name;
            this.title = title;
            console.log("my name is " + name + " " + title);
        }
        return MyClass;
    }());
    MyNameSpaceSecond.MyClass = MyClass;
})(MyNameSpaceSecond || (MyNameSpaceSecond = {}));
///<reference path="namespaceClass.ts"/>
///<reference path="namespaceClassSecond.ts"/>
var NameSpace = MyNameSpace.AgainMyNameSpace;
var Class = new NameSpace.MyClass("Shayan", "Mukherjee");
var ClassSecond = new MyNameSpaceSecond.MyClass("Riyam", "Mukherjee");
