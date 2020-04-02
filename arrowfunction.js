//arraow function using argument and return type
var arrow = function (number1, number2) {
    return number1 - number2;
};
console.log(arrow(10, 5));
//arrow function without argument and return type
var arrows = function () {
    console.log("Arrows");
};
arrows();
//arrow function using one argument
var arrowss = function (name) { return console.log(name); };
arrowss("Shayan");
//default argument function
var defaultss = function (name) {
    if (name === void 0) { name = "Shayan"; }
    console.log(name);
    var title = "Mukherjee";
    return (name + " " + title);
};
var get = defaultss();
console.log(get);
