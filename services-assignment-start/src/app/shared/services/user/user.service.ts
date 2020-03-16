import { LoggerService } from './../logger/logger.service';
import { User } from './../../models/user.model';
import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from '../counter/counter.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = new Array<User>();
  usersActual = new EventEmitter<Array<User>>();
  
  constructor(private loggerService: LoggerService, private counterService: CounterService) { }

  addUser(newUser: User){
    this.users.push(newUser);
  }

  changeUserStatus(searchedName:string){
    let userRef = this.users.find(u => u.name == searchedName);
    if(userRef.status){
      this.counterService.incrementDisactivatedCount();
      userRef.status = !userRef.status;
      this.loggerService.logDisactiavatedIncrease(this.counterService.getDisactivatedCount());
    }
    else{
      this.counterService.incrementActivatedCount();
      userRef.status = !userRef.status;
      this.loggerService.logActivatedIncrease(this.counterService.getActivatedCount());

    }
    this.loggerService.logStatusChange(userRef);
    this.usersActual.emit(this.users);
  }

  getUsersByStatus( active: boolean ) {
    let filteredUsers = this.users.filter(function(user) {
      return user.status === active;
    });
    return filteredUsers;
  }


}
