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
