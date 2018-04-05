import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title
  @Input() users
  @Output() onUserClick = new EventEmitter<object>()

  

  userSelected(user) {
    if (user.color!=='highlighted') {
      user.color = 'highlighted';
    } else user.color = ' ';
    
    //console.log(user);
    this.onUserClick.emit(user);
    //this.isChosen = !this.isChosen;
   // console.log(this.isChosen);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
