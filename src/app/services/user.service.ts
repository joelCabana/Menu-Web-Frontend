import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API:string ="http://localhost:3000/api/user";
  
  constructor(private _http:HttpClient) { 

  }


  getUsers():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
  
      })
    }   
    return this._http.get(this.URL_API , httpOptions );
  }


  updateUser(user:User){
    console.log("INGRESO AL SERVICE UPDATE");
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(user);
    return this._http.put(this.URL_API+"/"+ user._id,body,httpOptions);;
  }

}
