import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  model = {
    home: true,
    kanban: false,
    projects: false
  };

  ngOnInit(): void {
    this.model.home = true;
    this.model.kanban = false;
    this.model.projects = false
  }



}
