import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './models/User';
import { USERS } from './users-mock';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from './users.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  currentUser: User
  users$: Observable<User[]>
  subscription: Subscription
  
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
  
  }

  getUsers() {
    this.users$ = this.usersService.getList();
  }
  

  findUser(userData: User) {
    this.currentUser = userData;
  }

  deleteUser(user: User) {
    this.users$ = this.usersService
    .delUser(user)
    .switchMap(() => this.usersService.getList());
    this.currentUser = null;
 }

 addUser(user: User) {
   this.users$ = this.usersService
   .addNewUser(user);
 }
}
