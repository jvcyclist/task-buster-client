import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuButtons: Array<string> = ['Main Page', 'Wiki', 'Task Board', 'Projects', 'Logout'];



}
