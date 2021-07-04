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


  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {

  }



}
