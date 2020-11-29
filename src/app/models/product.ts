export class Product {

    _id: string;
    image:string;
    name: string;
    detail: string;
    price: number;
    available: boolean;

   constructor(image?:string,name?:string,detail?:string,price?:number,available?:boolean){
     this.image = image; 
     this.name = name;
     this.detail = detail;
     this.price = price;
     this.available = available;
    }


}
