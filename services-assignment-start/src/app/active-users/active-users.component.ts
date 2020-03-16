import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: Array<User>;
  activeusers: Array<User>;

  @Output() userSetToInactive = new EventEmitter<string>();

  onSetToInactive(name: string) {
    this.userSetToInactive.emit(name);
  }
}
