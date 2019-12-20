import { Identifiable } from "./identifiable";

export class Crud<TKey, TEntity extends Identifiable<TKey>> {
    public create(entity: TEntity){

    }

    public read(id: TKey){
        
    }

    public update(entity: TEntity){
        
    }

    public delete(entity: TKey){
        
    }
}