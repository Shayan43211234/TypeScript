var Area;
(function (Area) {
    var PI = 3.14;
    function area(radious) {
        return PI * radious * radious;
    }
    Area.area = area;
})(Area || (Area = {}));
var Circumference;
(function (Circumference_1) {
    var MyCircumference;
    (function (MyCircumference) {
        var PI = 3.14;
        function Circumference(circumference) {
            return circumference / (2 * PI);
        }
        MyCircumference.Circumference = Circumference;
    })(MyCircumference = Circumference_1.MyCircumference || (Circumference_1.MyCircumference = {}));
})(Circumference || (Circumference = {}));
//to run this ====> tsc namespace.ts --outFile namespace.js
///<reference path="./AreaNameSpace.ts"/> 
///<reference path="./CircumferenceNameSpace.ts"/>
//this is how namespace are imported
var MyCircumference = Circumference.MyCircumference; //this is from Circumference>MyCircumference namespace
var MyNameSpace;
(function (MyNameSpace) {
    var PI = 3.14;
    var MyCircle;
    (function (MyCircle) {
        function area(radious) {
            return PI * radious * radious;
        }
        MyCircle.area = area;
        function Circumference(circumference) {
            return circumference / (2 * PI);
        }
        MyCircle.Circumference = Circumference;
    })(MyCircle = MyNameSpace.MyCircle || (MyNameSpace.MyCircle = {}));
})(MyNameSpace || (MyNameSpace = {}));
var PI = 3.14159265;
var area = MyNameSpace.MyCircle.area(2); //this is from MyNameSpace>MyCircle namespace
var circumference = MyNameSpace.MyCircle.Circumference(12); //this is from MyNameSpace>MyCircle namespace
console.log(area);
console.log(circumference);
console.log(PI);
console.log(Area.area(10)); ////this is from Area namespace
console.log(MyCircumference.Circumference(1)); ////this is from Circumference namespace
