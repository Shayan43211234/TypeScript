let genericFunction=<T>(data:T):T=>{    //this is the generac function
    return data;
}

let data:{name:string,age:number}={
    name:"",
    age:0
};

let testGenericFunction=genericFunction("Shayan");
console.log(testGenericFunction.length);
let testGenericFunction1=genericFunction(12);
console.log(testGenericFunction1);
let testGenericFunction2=genericFunction({name:"Shayan",age:21});
console.log(testGenericFunction2.name+testGenericFunction2.age);