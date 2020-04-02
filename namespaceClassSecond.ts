namespace MyNameSpaceSecond{
        export class MyClass{
            name:string;
            title:string;
            public constructor(name:string,title:string){
                this.name=name;
                this.title=title;
                console.log(`her name is ${name} ${title}`);
            }
        }  
}