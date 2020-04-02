namespace Circumference{
    export namespace MyCircumference{   //called so nested namespace
    let PI:number=3.14;
    export function Circumference(circumference:number):number{
        return circumference/(2*PI);
    }
}
}