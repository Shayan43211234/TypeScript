class MyClass{
    myname:string;
    public name(name:string):void{
        this.myname=name;
        console.log(name);
    }
    protected age(age:number|string):void{
        age=age;
        console.log(age);
    }
}
class ExtendsClass extends MyClass{
    public roll(roll:number|string,age:number|string):void{
        roll=roll;
        console.log(roll);
        super.age(age);
    }
}
const object=new ExtendsClass();
object.roll(35,"21");
object.name("Shayan");