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
