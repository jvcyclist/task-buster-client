import { UserinfoService } from './userinfo.service';
import { Project } from './shared/project.model';
import { Observable } from 'rxjs';
import { SprintsService } from './services/sprints.service';
import { TasksService } from './services/tasks.service';
import { ProjectsService } from './services/projects.service';
import { Injectable } from '@angular/core';
import { observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  public currentProjectId: number;
  public currentSprintId: number;

  constructor(
    private projectsService: ProjectsService,
    private tasksService: TasksService,
    private sprintsService: SprintsService,
    private userinfoService: UserinfoService
    ) { }


    getProjectsByCurrentUser(username): Observable<Project[]>{
       return this.projectsService.getAllProjectsByUsername(username);
    }


}
