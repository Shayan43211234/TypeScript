//compile this using tsc -t es5 getterAndSetter.ts
var GetterAndSetter = /** @class */ (function () {
    function GetterAndSetter() {
        this._Tree = "Default";
    }
    Object.defineProperty(GetterAndSetter.prototype, "tree", {
        get: function () {
            return this._Tree;
        },
        set: function (value) {
            if (value.length > 3) {
                this._Tree = value;
            }
            else {
                this._Tree = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return GetterAndSetter;
}());
var getset = new GetterAndSetter();
console.log(getset.tree);
getset.tree = "Mango";
console.log(getset.tree);
