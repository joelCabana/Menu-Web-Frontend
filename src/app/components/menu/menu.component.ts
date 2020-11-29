import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:User;
  menu:Menu;

  constructor(private _userServices:UserService) {
    this.menu = new Menu();
    this.getUser();
   }


   getUser(){
    this._userServices.getUsers().subscribe(
      (result)=>{
       // console.log(result);
       this.user = new User();
        Object.assign(this.user,result[0]);
        console.log(this.user);
      },
      (error)=>{
        console.log(error);
      }
    )
   }

   addMenu(){
    this.user.menu.push(this.menu);
    this._userServices.updateUser(this.user).subscribe(
      (result)=>{
          alert("Pasaje Modificado");
          this.getUser();
      },
      (error)=>{
        console.log(error);
      }
    );
    this.menu = new Menu();
   }


   test(){
     console.log("le diste click a un div");
   }



  ngOnInit(): void {
  }

}
