import { UserService } from './../core/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name;

  public isLoggedIn = false;

  constructor(
    private http: HttpClient,
    private securityService: SecurityService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo().subscribe(data => {
      this.name = data.name;
      if(this.name !== null){
        this.userService.find(this.name).subscribe(foundUser => {
          if(foundUser.username === null){
            this.userService.create({username: this.name})
          }
        });
      }
    });
  }

  getUserInfo(): Observable<any> {
    return this.http.get(environment.baseUrl + '/v1/home');
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.router.navigate(['/login']);
    });
  }

}
