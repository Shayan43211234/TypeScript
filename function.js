//with argument with return
function add(value, value1) {
    return (value + value1);
}
var result = add(1, 2);
console.log(result);
//no argument no return
function print1() {
    console.log("hi");
}
print1();
//no argument with return
var mul = function () {
    var a = 10;
    var b = 10;
    return (a * b);
};
console.log(mul());
//with argument no return
function div(val1, val2) {
    console.log(val1 / val2);
}
div(10, 2);
//how to define types of function
var MyAdd;
MyAdd = add;
console.log(MyAdd(1, 2));
/*//never type
function neverReturns():never{
    throw new Error("Error");
}
console.log(neverReturns());*/
//default argument function
var defaultss = function (name) {
    if (name === void 0) { name = "Shayan"; }
    console.log(name);
    var title = "Mukherjee";
    return (name + " " + title);
};
var get = defaultss();
console.log(get);
