import { ProjectsService } from './../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects()
                        .subscribe(projects => this.projects = projects);
  }

}
