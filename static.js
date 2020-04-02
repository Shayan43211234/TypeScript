var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.area = function (radious) {
        return this.PI * radious * radious;
    };
    Helper.PI = 3.14;
    return Helper;
}());
var result = Helper.area(2);
console.log(result);
