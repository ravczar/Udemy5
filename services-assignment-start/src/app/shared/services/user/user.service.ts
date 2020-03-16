import { LoggerService } from './../logger/logger.service';
import { User } from './../../models/user.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = new Array<User>();
  
  constructor(private loggerService: LoggerService) { }

  addUser(newUser: User){
    this.users.push(newUser);
  }

  changeUserStatus(searchedName:string){
    let userRef = this.users.find(u => u.name == searchedName);
    userRef.status = !userRef.status;
    this.loggerService.logStatusChange(userRef);
  }

  getUsersWByStatus( active: boolean ) {
    let filteredUsers = this.users.filter(function(user) {
      return user.status === active;
    });
    return filteredUsers;
  }


}
