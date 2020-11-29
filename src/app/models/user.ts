import { Menu } from './menu';

export class User {
    _id:string;
    company_name:string;
    email:string;
    password:string;
    menus:Array<Menu> = new Array<Menu>();

    constructor(company_name?:string,email?:string,password:string,menus?:Array<Menu>){
      this.company_name = company_name;
      this.email = email;
      this.password = password;
      this.menus = menus;
    }
}
