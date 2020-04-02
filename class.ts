class MyClass{

    public name:string;
    private roll:number;
    protected salary:number;
    age:number;
    
    public constructor(name:string,roll:number,salary:number,age:number){
        this.name=name;
        this.age=age;
        console.log(`my name is ${name}
age is ${age}`);
        this.getRoll(roll,salary);
    }
    
    protected getRoll(roll:number,salary:number){
        this.roll=roll;
        console.log(`my roll no is ${roll}`);
        this.getSalary(salary);
    }
    
    private getSalary(salary:number){
        this.salary=salary;
        console.log(`and my salary is ${salary}`);
    }

}

let myclass=new MyClass("Shayan",35,5000,21);