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
    this.tasksService.getAllTasks().subscribe(tasks => {this.tasks = tasks; } );
    console.log(this.tasks);
  }

  BACKLOG = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  TODO = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  IN_PROGRESS = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  QA = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  DONE = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  showTasks() {
    console.log(this.tasks);
    this.tasks.forEach(task => {
      if(task.progress === 'BACKLOG'){
        this.BACKLOG.push(task.name);
      }
    });
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


}
