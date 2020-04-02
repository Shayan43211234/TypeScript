var genericFunction = function (data) {
    return data;
};
var data = {
    name: "",
    age: 0
};
var testGenericFunction = genericFunction("Shayan");
console.log(testGenericFunction.length);
var testGenericFunction1 = genericFunction(12);
console.log(testGenericFunction1.toString(genericFunction(12)));
var testGenericFunction2 = genericFunction({ name: "Shayan", age: 21 });
console.log(testGenericFunction2.name + testGenericFunction2.age);
