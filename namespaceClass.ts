namespace MyNameSpace{
    export namespace AgainMyNameSpace{
        export class MyClass{
            name:string;
            title:string;
            public constructor(name:string,title:string){
                this.name=name;
                this.title=title;
                console.log(`my name is ${name} ${title}`);
            }
        } 
    }
}