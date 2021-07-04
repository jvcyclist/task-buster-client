import { ProjectsService } from './../../services/projects.service';
import { Project } from './../../shared/project.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';
import { User } from 'src/app/core/user/user.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;
  participants: User[]= [];
  userNameToInvite: string;

  constructor(private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getProject();
    this.participants.push(new User(1,'TestUser1'));
    this.participants.push(new User(1,'TestUser2'));
    this.participants.push(new User(1,'TestUser3'));
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

onInvite(){
  console.log("Invite has been sent to user: " + this.userNameToInvite)
  this.userNameToInvite = ''
}

}
