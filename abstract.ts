abstract class MyProject{
    protected projectName:string=null;
    projectType:string=null;
    projectDuration:number|string=null;
    public abstract getProjct(projectName:string, projectType:string, projectDuration:number|string):void;
    public companyProfile(companyName:string):string{
        companyName=companyName;
        return companyName;
    }
}
class ItProject extends MyProject{
    public getProjct(projectName:string, projectType:string, projectDuration:number|string):void{
        this.projectName=projectName;
        this.projectType=projectType;
        this.projectDuration=projectDuration;
        console.log(`${projectName}
${projectType}
${projectDuration}`);
    }
}
const IP=new ItProject();
IP.getProjct("AMS","Assessment Managment","1 year");
const MP=IP.companyProfile("Manipal Global Education Service");
console.log(MP);