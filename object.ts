//how tod define type of object
let userData : {name:string, age:number}={
    age:10,
    name:"Shayan"
};
console.log(userData);

//complex object define
let complex:{data:number[],output:(all:boolean)=>number[]}={
data:[10,20,30],
output:function (all:boolean):number[]{
return this.data;
}
};
console.log(complex.output(true));

//type aliases
type Complex={data:number[],output:(all:boolean)=>number[]};
let complex1:Complex={
    data:[40,50,60],
    output:function (all:boolean):number[]{
    return this.data;
    }
};
console.log(complex1.output(false));

