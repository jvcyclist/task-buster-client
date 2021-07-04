import { User } from 'src/app/core/user/user.model';
import { Location } from '@angular/common';
import { UserinfoService } from './../../userinfo.service';
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
  adminUser: User = new User();
  userName: string = '';

  constructor(
    private projectsService: ProjectsService,
    private userInfoService: UserinfoService,
    private location: Location
    ) { }
  ngOnInit(): void {
    this.userInfoService.getCurrentUserName().subscribe( data => this.userName = data.name);
  }

  addProject(){

    this.adminUser.username = this.userName;
    this.project.adminUser = this.adminUser;
    this.projectsService.addProject(this.project).subscribe(res => console.log(res));
  }
  onBack(){
    this.location.back();
  }

}
