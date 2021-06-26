import { SprintsService } from './../services/sprints.service';
import { Component, OnInit } from '@angular/core';
import { Sprint } from '../shared/sprint.model';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  public sprints: Sprint[] = [];

  constructor(private sprintsService: SprintsService) { }

  ngOnInit(): void {
    this.sprintsService.getSprints().subscribe(sprints => this.sprints = sprints)
  }



}
