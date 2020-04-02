//with argument with return
function add(value:number, value1:number):number{
    return (value+value1);
}
let result=add(1,2);
console.log(result);

//no argument no return
function print1():void{
    console.log("hi");
}
print1();

//no argument with return
let mul=function ():number{
    let a:number=10;
    let b:number=10;
    return (a*b);
}
console.log(mul());

//with argument no return
function div(val1:number, val2:number):void{
    console.log(val1/val2);
}
div(10,2);

//how to define types of function
let MyAdd:(val1:number,val2:number)=>number;
MyAdd=add;
console.log(MyAdd(1,2));

/*//never type
function neverReturns():never{
    throw new Error("Error");
}
console.log(neverReturns());*/

//default argument function
const defaultss=function(name:string="Shayan") :string
{
    console.log(name);
    let title="Mukherjee";
    return (name+" "+title);
}
let get:string=defaultss();
console.log(get);
