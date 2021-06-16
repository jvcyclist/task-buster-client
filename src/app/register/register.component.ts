import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../core/user/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user: User;
  public username: string = '';
  public password: string = '';
  public retypedPassword: string = '';
  public errorMessages: string[] = [];
  private error: HttpErrorResponse;


  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  public registerUser() {
    if (this.isRetypedPasswordSameAsPassword()) {
      this.error = null;
      this.errorMessages = [];


      this.user.username = this.username;
      this.user.password = this.username;

      if ((this.username != '') && (this.password != '')) {
        this.registerService.registerUser(this.user).subscribe(

          data => {
            if (!this.error) {
              this.router.navigate(['/login']);
            }

          },
          (error: HttpErrorResponse) => {

            this.error = error;
            if (error.status == 400) {
              this.errorMessages.push('User with given username already exist. Please choose another username');
            }
          }
        );
      }
    }
    else {
      this.errorMessages.push('Provided passwords don\'t match please fill them again!')
    }
  }

  isRetypedPasswordSameAsPassword(): boolean {
    return ((this.retypedPassword === this.password)
      && (this.password !== null)
      && (this.password != '')) ?
      true
      : false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
