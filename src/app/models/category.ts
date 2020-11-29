import { Product } from './product';

export class Category {
    _id:string;
    name:string;
    available:boolean;
    product: Array<Product> = new Array<Product>();

    constructor(name?:string,available?:boolean,product?:Array<Product>){
        this.name = name;
        this.available = available;
        this.product = product;
    }
}
