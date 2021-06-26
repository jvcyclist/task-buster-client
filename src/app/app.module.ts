import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
import {ActivatedRoute, RouterModule} from '@angular/router';
import {UserService} from './core/user/user.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskDetailsComponent } from './task-board/task-details/task-details.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SprintsComponent } from './sprints/sprints.component';
import { SprintsDetailsComponent } from './sprints/sprints-details/sprints-details.component';
import { SprintsCreateComponent } from './sprints/sprints-create/sprints-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    TaskDetailsComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    SprintsComponent,
    SprintsDetailsComponent,
    SprintsCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    TasksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
