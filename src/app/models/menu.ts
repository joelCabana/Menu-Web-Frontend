import { Category } from './category';

export class Menu {
    _id:string;
    name:string;
    description:string;
    categories:Array<Category> = new Array<Category>();

    constructor(name?:string, description?:string,categories?:Array<Category>){
      this.name = name;
      this.description = description;
      this.categories = categories;
    }
}
