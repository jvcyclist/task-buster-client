import { ProjectsService } from './../services/projects.service';
import { Project } from './../shared/project.model';
import { TreeService } from './../tree.service';
import { SprintsService } from './../services/sprints.service';
import { Component, OnInit } from '@angular/core';
import { Sprint } from '../shared/sprint.model';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  project: Project;

  public sprints: Sprint[] = [];

  constructor(
    private sprintsService: SprintsService,
    private treeService: TreeService,
    private projectsService: ProjectsService
    ) { }

  ngOnInit(): void {
    this.projectsService.getProject(this.treeService.currentProjectId).subscribe(project =>{
      this.project = project;
    })

    this.sprintsService.getSprintByProjectId(
      this.treeService.currentProjectId).subscribe(
        sprints => this.sprints = sprints
        )
  }

  setCurrentSprint(sprintId: number){
    this.treeService.currentSprintId = sprintId;
  }



}
