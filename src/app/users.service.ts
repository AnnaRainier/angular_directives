import { Injectable } from '@angular/core';
import { USERS } from './users-mock';
import { User } from './models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/share';

@Injectable()
export class UsersService {
users: User[] = USERS

  constructor() { }

  getList(): Observable<User[]> {
    return of(this.users).share();
  }

  delUser(user: User): Observable<void> {
    this.users = this.users.filter(u => u!== user);
    return of(null);
  }

  addNewUser(user: User): Observable<User[]>{
    user = Object.create(user);
    user.color = '';
    this.users.push(user);
    return of(this.users).share();
  }

}
