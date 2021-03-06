import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
