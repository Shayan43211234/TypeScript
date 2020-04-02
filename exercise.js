var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("*****First Exercise*****");
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Shayan",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log("*****First Exercise*****");
console.log("*****Second Exercise*****");
var double = function (value) {
    return value * 2;
};
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = "Shayan"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var newArray = __spreadArrays([55, 20], numbers);
console.log(newArray);
//let newArray = [55, 20];
//newArray.push(...numbers);    //this formula is also write
//console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = {
    firstName: "Will",
    experience: 12
};
var experience = scientist.experience, firstName = scientist.firstName;
console.log(firstName, experience);
console.log("*****Second Exercise*****");
