//destructrucing for array
let array:string[]=["Shayan","Mukherjee"];
let [namessss,title]=array;//this is the array destructuring systex
console.log(namessss+" "+title);

//destructruing for object
let user:{userName:string, age:number}={
    userName:"Shayan",
    age:21
};
let{userName,age}=user;
console.log(userName,age);