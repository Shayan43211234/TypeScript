//spread operator
let spread:number[]=[10,20,30];
let max=Math.max(...spread);//if we use "..." when we calling a function then its denoted that this is a spread
console.log(max);



//rest operator
let rest=function(age:number,...names:string[]):void{//if we use "..." when we define a function to then its called rest
    console.log(age+"="+names[0]);
}
rest(21,"Shayan","Tubai");
