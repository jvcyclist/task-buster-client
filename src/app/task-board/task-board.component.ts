import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {TasksService} from '../services/tasks.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

    tasks: Array<Task>;
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.showTasks();
    } );

  }

  BACKLOG = [];

  TODO = [];

  IN_PROGRESS = [];

  QA = [];

  DONE = [];

  showTasks(): void {
    this.segregateTasks(this.tasks);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  addBACKLOGItem(newItem) {
    this.BACKLOG.push(newItem);
  }

  addTODOItem(newItem) {
    this.TODO.push(newItem);
  }

  addIN_PROGRESSItem(newItem) {
    this.IN_PROGRESS.push(newItem);
  }

  addQAItem(newItem) {
    this.QA.push(newItem);
  }

  addDONEItem(newItem) {
    this.DONE.push(newItem);
  }

  segregateTasks(tasks: Array<Task>){
    tasks.forEach(task =>{
      switch (task.progress) {
        case 'BACKLOG':{
          this.BACKLOG.push(task.name);
          break;
        }
        case 'TODO':{
          this.TODO.push(task.name);
          break;
        }
        case 'IN_PROGRESS':{
          this.IN_PROGRESS.push(task.name);
          break;
        }
        case 'QA':{
          this.QA.push(task.name);
          break;
        }
        case 'DONE':{
          this.DONE.push(task.name);
          break;
        }

      }


    });
  }

}
