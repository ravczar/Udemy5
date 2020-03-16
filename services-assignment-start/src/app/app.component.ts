import { UserService } from './shared/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: Array<User>;
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor( private userService: UserService){}

  ngOnInit():void {
    this.userService.addUser(new User('Max', true));
    this.userService.addUser(new User('Anna', true));
    this.userService.addUser(new User('Chris', false));
    this.userService.addUser(new User('Manu', false));
    this.users = this.userService.users;
    console.log("Przypadki: "+ this.userService.getUsersWithStatus(false));
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
