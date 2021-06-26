import { Location } from '@angular/common';
import { SprintsService } from './../../services/sprints.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/shared/sprint.model';

@Component({
  selector: 'app-sprints-details',
  templateUrl: './sprints-details.component.html',
  styleUrls: ['./sprints-details.component.css']
})
export class SprintsDetailsComponent implements OnInit {

  id: number;
  sprint: Sprint;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sprintsService: SprintsService
  ) { }

  ngOnInit(): void {
    this.getSprint();
  }

  getSprint() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = Number(params.get('id'));
      }
    )

    this.sprintsService.getSprint(this.id).subscribe(sprint => this.sprint = sprint)
  }

  onBack(){
    this.location.back()
  }

  updateSprint(){
    console.log('update')
  }

  deleteSprint(){
    console.log('delete')
  }

}
