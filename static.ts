class Helper{
    static PI=3.14;
    static area(radious:number):number{
        return this.PI*radious*radious;
    }
}
let result=Helper.area(2);
console.log(result);