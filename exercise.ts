console.log("*****First Exercise*****");

type BankAccount={money:number,deposit:(value:number)=>void}
let bankAccount : BankAccount={
    money:2000,
    deposit(value:number):void{
        this.money+=value;
    }
};
let myself : {name:string,bankAccount:BankAccount,hobbies:string[]}={
    name:"Shayan",
    bankAccount:bankAccount,
    hobbies:["Sports","Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);

console.log("*****First Exercise*****");

console.log("*****Second Exercise*****");

let double = (value:number):number=> {
    return value * 2;
};
console.log(double(10));



let greet = (name:string="Shayan"):void =>{
    console.log("Hello, " + name);
};
greet();
greet("Anna");



let numbers :number[]= [-3, 33, 38, 5];
console.log(Math.min(...numbers));



let newArray :number[]= [55, 20,...numbers];
console.log(newArray);

//let newArray = [55, 20];
//newArray.push(...numbers);    //this formula is also write
//console.log(newArray);


let testResults:number[] = [3.89, 2.99, 1.38];
let [result1,result2,result3]=testResults;
console.log(result1, result2, result3);



let scientist:{firstName:string,experience:number} = {
    firstName: "Will",
    experience: 12
};
let {experience,firstName}=scientist;
console.log(firstName, experience);

console.log("*****Second Exercise*****");