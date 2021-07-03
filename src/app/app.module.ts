import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHeaderInterceptorService } from './auth/auth-header-interceptor.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskBoardComponent } from './task-board/task-board.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TasksService} from './services/tasks.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { UserService} from './core/user/user.service';
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
import { CallbackComponent } from './callback/callback.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';


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
    SprintsCreateComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    CoolSocialLoginButtonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi: true
    },
    TasksService,
    UserService,
    AuthGuardService,
    AuthInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
