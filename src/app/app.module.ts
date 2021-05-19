import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskBoardComponent } from './task-board/task-board.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {TasksService} from './services/tasks.service';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserService} from './core/user/user.service';
@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    TasksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
