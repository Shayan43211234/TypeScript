interface MyInterface{   
     MyInterfaceFunction(MyFirstName:string,MyAge:string):void;
}
class MyInterfaceClass implements MyInterface{
    MyFirstName:string="";
    MyAge:any;
    MyInterfaceFunction(MyFirstName:string,MyAge:string|number):void{
        this.MyFirstName=MyFirstName;
        this.MyAge=MyAge;
        console.log("My name is "+MyFirstName+" and my age is "+MyAge);
    }
}
const instance=new MyInterfaceClass();
instance.MyInterfaceFunction("Shayan",21);


interface AgainMyInterface{
    MyName:string;
    MyAge?:number;  //"?" this mean you have or have not use this variable where you extends the interface 
}

class AgainMyInterfaceClass implements AgainMyInterface{
    MyName:string="Shayan";
    MyAgeAgain:number=21;
     MyObject:{MyNameAgain:string,MyAgeAgain:number}={
        MyNameAgain:this.MyName,
        MyAgeAgain:this.MyAgeAgain
    };
     AgainMyInterfaceFunction=(MyObject:{MyNameAgain:string,MyAgeAgain:number}):void=>{
        console.log(MyObject.MyNameAgain);
        console.log(MyObject.MyAgeAgain);
    }
}
let AgainInstance=new AgainMyInterfaceClass();
AgainInstance.AgainMyInterfaceFunction({MyNameAgain:"Shayan Mukherjee",MyAgeAgain:21});
