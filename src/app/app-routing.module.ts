import { AuthGuardService } from './auth/auth-guard.service';
import { SprintsCreateComponent } from './sprints/sprints-create/sprints-create.component';
import { SprintsDetailsComponent } from './sprints/sprints-details/sprints-details.component';
import { SprintsComponent } from './sprints/sprints.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { TaskDetailsComponent } from './task-board/task-details/task-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TaskBoardComponent} from './task-board/task-board.component';
import {LoginComponent} from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

const  routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'kanban', component: TaskBoardComponent, canActivate: [AuthGuardService]},
  {path: 'register', component: RegisterComponent },
  {path: 'task/:id', component: TaskDetailsComponent , canActivate: [AuthGuardService]},
  {path: 'projects', component: ProjectsComponent , canActivate: [AuthGuardService]},
  {path: 'projects/:id', component: ProjectDetailsComponent , canActivate: [AuthGuardService]},
  {path: 'project/create', component: CreateProjectComponent , canActivate: [AuthGuardService]},
  {path: 'sprints', component: SprintsComponent , canActivate: [AuthGuardService]},
  {path: 'sprints/:id', component: SprintsDetailsComponent, canActivate: [AuthGuardService] },
  {path: 'sprint/create', component: SprintsCreateComponent, canActivate: [AuthGuardService] },
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
