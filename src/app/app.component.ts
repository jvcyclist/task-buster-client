import { Router } from '@angular/router';
import { SecurityService } from './security.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private securityService: SecurityService, private router: Router){}


  public isAuthenticated: boolean = false;

  model = {
    home: true,
    kanban: false,
    projects: false
  };

  ngOnInit(): void {
    this.model.home = true;
    this.model.kanban = false;
    this.model.projects = false

    this.isAuthenticated = this.securityService.isLoggedIn();
  }

  logout() {
    this.securityService.logout().subscribe(()=>{
      this.securityService.removeToken();
      this.isAuthenticated = false;
      this.router.navigate(['/login']);
    });

  }

}
