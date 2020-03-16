import { UserService } from './shared/services/user/user.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  users: Array<User>;
  activeUsers: Array<User>;
  inactiveUsers: Array<User>;

  constructor( private userService: UserService ){
    this.userService.usersActual.subscribe((receivedUsers:Array<User>) => {
      this.users = receivedUsers;
      this.activeUsers = this.userService.getUsersByStatus(true);
      this.inactiveUsers = this.userService.getUsersByStatus(false);
    });
  }

  ngOnChanges() {

  }

  ngOnInit():void {
    this.userService.addUser(new User('Max', true));
    this.userService.addUser(new User('Anna', true));
    this.userService.addUser(new User('Chris', false));
    this.userService.addUser(new User('Manu', false));
    this.users = this.userService.users;
    this.activeUsers = this.userService.getUsersByStatus(true);
    this.inactiveUsers = this.userService.getUsersByStatus(false);
  }

}
