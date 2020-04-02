//arraow function using argument and return type
const arrow=(number1:number,number2:number):number=>{
    return number1-number2;
}
console.log(arrow(10,5));

//arrow function without argument and return type
const arrows=()=>{
    console.log("Arrows");
}
arrows();

//arrow function using one argument
const arrowss=name=>console.log(name);
arrowss("Shayan");

//default argument function
const defaultss=(name:string="Shayan") :string=>
{
    console.log(name);
    let title="Mukherjee";
    return (name+" "+title);
}
let get:string=defaultss();
console.log(get);
