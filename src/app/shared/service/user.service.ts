import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users:User[] = [];

  // return user list
  getUserList(){
    return this.users;
  }

  // add user inside users array
  addUser(data:User){
    this.users.push(data);
  }

  constructor() { }
}
