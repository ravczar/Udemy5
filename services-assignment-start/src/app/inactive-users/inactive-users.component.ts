import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: Array<User>;

  constructor( private userService: UserService){}

  onSetToActive(name: string) {
    this.userService.changeUserStatus(name);
  }

}
