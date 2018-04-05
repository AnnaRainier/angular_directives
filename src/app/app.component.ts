import { Component } from '@angular/core';

const users = [
  {
  name: 'bob',
   age: 40,
   role: 'admin'
  },
  {
    name: 'vasya',
    age: 22,
    role: 'user'
  },
  {
    name: 'alice',
    age: 15,
    role: 'user'
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  users = users;
  user;

  findUser(userData) {
  this.user = userData;
  //console.log(userData);
  }

  deleteUser(delUser) {
    let id = this.users.indexOf(delUser);
    console.log(id);
    this.users.splice(id, 1);
    this.user = false;
  }
}
