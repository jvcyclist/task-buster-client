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

const  routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kanban', component: TaskBoardComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'task/:id', component: TaskDetailsComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'projects/:id', component: ProjectDetailsComponent },
  {path: 'projects/create', component: CreateProjectComponent },

  {path: '**', component: PageNotFoundComponent},
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
