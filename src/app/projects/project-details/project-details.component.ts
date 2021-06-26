import { ProjectsService } from './../../services/projects.service';
import { Project } from './../../shared/project.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;

  constructor(private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
       this.id = Number(params.get('id'));
    }
    )

this.projectsService.getProject(this.id)
  .subscribe(project => this.project = project);
}

onBack(){
  this.location.back();
}

updateProject(){
  console.log("Update!")
  this.projectsService.updateProject(this.project).subscribe(res => console.log(res))
}

deleteProject(){
  this.projectsService.deleteProject(this.project.id).subscribe(res => {
    console.log(res)
    this.location.back()
  })

}

}
