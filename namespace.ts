//to run this ====> tsc namespace.ts --outFile namespace.js

///<reference path="./AreaNameSpace.ts"/> 
///<reference path="./CircumferenceNameSpace.ts"/>

//this is how namespace are imported

import MyCircumference=Circumference.MyCircumference;   //this is from Circumference>MyCircumference namespace

namespace MyNameSpace{
    let PI:number=3.14;
    export namespace MyCircle{  //called so nested namespace
     export function area(radious:number):number{
        return PI*radious*radious;
    }
    export function Circumference(circumference:number):number{
        return circumference/(2*PI);
    }
}
}
let PI=3.14159265;
let area=MyNameSpace.MyCircle.area(2);//this is from MyNameSpace>MyCircle namespace
let circumference=MyNameSpace.MyCircle.Circumference(12);//this is from MyNameSpace>MyCircle namespace
console.log(area);
console.log(circumference);
console.log(PI);
console.log(Area.area(10));////this is from Area namespace
console.log(MyCircumference.Circumference(1));////this is from Circumference namespace
