import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logStatusChange(user:User) {
    console.log('User: ' + user.name + ' status changed to: ' + user.status);
  }
}
