import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/shared/task.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {Location} from '@angular/common';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  id: number;
  task: Task = null;

  constructor
  (
    private taskService: TasksService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    /*this.task = new Task(1,'test','test description of task', 5, 'BACKLOG');*/
    this.getTask();
  }

  getTask(): void {

        this.route.paramMap.subscribe(
          (params: ParamMap) => {
           this.id = Number(params.get('id'));
        }
        )

    this.taskService.getTask(this.id)
      .subscribe(task => this.task = task);
      console.log("Task id: "+ this.task.id);
  }

    onBack(){
      this.location.back();
    }

  }

