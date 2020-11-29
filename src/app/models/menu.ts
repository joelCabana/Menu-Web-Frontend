import { Category } from './category';

export class Menu {
    _id:string;
    name:string;
    description:string;
    category:Array<Category> = new Array<Category>();

    constructor(name?:string, description?:string,category?:Array<Category>){
      this.name = name;
      this.description = description;
      this.category = category;
    }
}
