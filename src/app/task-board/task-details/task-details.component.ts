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
  statuses: string[] = ['BACKLOG','TODO','IN_PROGRESS','QA','DONE'];

  constructor
  (
    private taskService: TasksService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
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
  }

    onBack(){
      this.location.back();
    }

    updateTask(){
      this.taskService.updateTask(this.task).subscribe( res => console.log(res));
    }

    deleteTask(){
      this.taskService.deleteTask(this.task.id).subscribe( res => {
        console.log(res);
        this.location.back();
      });
    }

  }

