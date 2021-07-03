import { SprintsService } from './../../services/sprints.service';
import { TreeService } from './../../tree.service';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.model';
import { Sprint } from 'src/app/shared/sprint.model';

@Component({
  selector: 'app-sprints-create',
  templateUrl: './sprints-create.component.html',
  styleUrls: ['./sprints-create.component.css']
})
export class SprintsCreateComponent implements OnInit {

  errorMsg;
  currentProject: Project;
  sprint: Sprint = new Sprint();

  constructor(
    private sprintsService: SprintsService,
    private projectService: ProjectsService,
    private treeService: TreeService
    ) { }

  ngOnInit(): void {
    this.projectService.getProject(this.treeService.currentProjectId).subscribe(project => {
      this.currentProject = project;
    })

    this.sprint.plannedStoryPoints = 0;
  }

  createSprint(){
      console.log('Sprint startDate: ' + this.sprint.startDate);
      console.log('Sprint endDate: ' + this.sprint.endDate);
      this.sprint.project_id = this.treeService.currentProjectId;
      this.sprint.taskList = [];
      this.sprintsService.addSprint(this.sprint).subscribe(s => console.log(s));

  }

  onBack(){

  }

}
