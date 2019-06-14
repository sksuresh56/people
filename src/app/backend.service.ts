import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')

  }

  saveUser(url,body){
    return this.http.post(url,body)

  }

}
