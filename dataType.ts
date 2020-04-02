//number
let number:number=12;
console.log(number);

//string
let string:string="Hi";
console.log(string);

//boolean
let boolean:boolean=true;
console.log(boolean);

//any
let any:any="hello";
console.log(any);
any=12;
console.log(any);
any=false;
console.log(any);

//undefined
let anyAgain;
anyAgain=12;
console.log(anyAgain);
anyAgain="my";
console.log(anyAgain);

//string array
let array:string[]=["name","hobbies"];
console.log(array);
console.log(array[1]);

//any array
let arrays:any[]=["name","shayan","roll",12];
console.log(arrays);
console.log(typeof arrays);
arrays=[false];
console.log(arrays);

//tuples
let tuples:[string,number]=["Shayan",21];
console.log(tuples[0]);
tuples[1]=22;
console.log(tuples);

//enum
enum Color{
    Grey=100,
    Red,
    Blue
}
let color:Color=Color.Blue;
console.log(color);
//let color1:Color=Color[100];
console.log(Color[101]);

//any
let car:any="BMW";
console.log(car);
car={
    brand:"BMW",
    series:3
};
console.log(car.series);

//union type
let realAge:number|string=21;
realAge="27";
//realAge=true; //throw an erroe because, Type 'true' is not assignable to type 'string | number'.
console.log(realAge);

//check type
let IsString="Shayan";
if(typeof IsString == "string"){
    console.log(IsString);
}
else{
    console.log("not a string");
}


