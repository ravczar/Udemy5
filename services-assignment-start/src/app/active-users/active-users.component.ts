import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: Array<User>;

  constructor( private userService: UserService){}

  ngOnInit():void{
    this.users = this.userService.getUsersByStatus(true);
  }

  onSetToInactive(name: string) {
    this.userService.changeUserStatus(name);
  }


}
