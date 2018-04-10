import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: object
  @Output() onUserDel = new EventEmitter<object>()
  @Output() onUserAdd = new EventEmitter<object>()

  findDeleteUserId() {
    let delUser = this.user;
    console.log(delUser);
    this.onUserDel.emit(delUser);
  }

  findAddUser() {
    let addUser = this.user;
    this.onUserAdd.emit(addUser)
  }

  constructor() { }

  ngOnInit() {
  }

}
