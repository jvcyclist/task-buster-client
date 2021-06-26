import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  public project: Project = new Project();

  constructor(private projectsService: ProjectsService) { }
  ngOnInit(): void {
  }

  addProject(){
    this.projectsService.addProject(this.project).subscribe(res => console.log(res));
  }

}
