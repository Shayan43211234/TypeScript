//compile this using tsc -t es5 getterAndSetter.ts

class GetterAndSetter{
    private _Tree : string = "Default";
    
    get tree():string{
        return this._Tree;
    }

    set tree(value:string){
        if(value.length > 3){
            this._Tree=value;
        }   
        else{
            this._Tree="Default";
        }
    }
}
const getset=new GetterAndSetter();
console.log(getset.tree);
getset.tree="Mango";
console.log(getset.tree);
