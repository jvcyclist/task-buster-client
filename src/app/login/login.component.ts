import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SecurityService } from '../services/security.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../core/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private securityService: SecurityService
  ) {

  }

  ngOnInit() {

  }

  login(name) {
    this.securityService.login(name);
  }
}
