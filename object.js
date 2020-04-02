//how tod define type of object
var userData = {
    age: 10,
    name: "Shayan"
};
console.log(userData);
//complex object define
var complex = {
    data: [10, 20, 30],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
var complex1 = {
    data: [40, 50, 60],
    output: function (all) {
        return this.data;
    }
};
console.log(complex12.output(false));
