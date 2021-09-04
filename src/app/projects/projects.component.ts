import { TreeService } from '../services/tree.service';
import { UserinfoService } from '../services/userinfo.service';
import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  username;
  projects: Project[];

  constructor(
    private projectsService: ProjectsService,
    private userinfoService: UserinfoService,
    private treeService: TreeService) { }

  ngOnInit(): void {
      this.userinfoService.getCurrentUserName().subscribe(data => {
        this.projectsService.getAllProjectsByUsername(data.name).subscribe(projects =>
          {this.projects = projects});
      })
  }

  setCurrentProject(projectId: number){
    this.treeService.currentProjectId = projectId;
  }

}
