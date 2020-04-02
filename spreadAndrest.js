//spread operator
var spread = [10, 20, 30];
var max = Math.max.apply(Math, spread); //if we use "..." when we calling a function then its denoted that this is a spread
console.log(max);
//rest operator
var rest = function (age) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(age + "=" + names[0]);
};
rest(21, "Shayan", "Tubai");
