import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../services/tasks.service';
import { Task } from '../shared/task.model';

import { Location } from '@angular/common';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private tasksService: TasksService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.showTasks();
    });
  }

  BACKLOG: Array<Task> = [];

  TODO: Array<Task> = [];

  IN_PROGRESS: Array<Task> = [];

  QA: Array<Task> = [];

  DONE: Array<Task> = [];

  showTasks(): void {
    this.cleanTasks();
    this.groupTasks(this.tasks);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.updateTaskStatus(Number(event.previousContainer.data[event.previousIndex]['id']),
        event.container.id
      )
      event.previousContainer.data[event.previousIndex]['id']
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addNewTask(name: string, progress: string) {
    let task: Task = new Task();
    task.name = name;
    task.progress = progress;
    task.storyPoints = 0;
    this.tasksService.addTask(task).subscribe(res => {
      this.tasksService.getAllTasks().subscribe(tasks => {
        this.tasks = tasks;
        this.showTasks();
      });
    })
  }

  addBACKLOGItem(newItem) {
    let progress = '';
    let task: Task = new Task();
    task.name = newItem;
    task.progress = 'BACKLOG';
    task.storyPoints = 0;
    this.tasksService.addTask(task).subscribe(res => this.BACKLOG.push(res))
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

  groupTasks(tasks: Array<Task>): void {
    tasks.forEach(task => {
      switch (task.progress) {
        case 'BACKLOG': {
          this.BACKLOG.push(task);
          break;
        }
        case 'TODO': {
          this.TODO.push(task);
          break;
        }
        case 'IN_PROGRESS': {
          this.IN_PROGRESS.push(task);
          break;
        }
        case 'QA': {
          this.QA.push(task);
          break;
        }
        case 'DONE': {
          this.DONE.push(task);
          break;
        }
      }
    });
  }

  cleanTasks() {
    this.BACKLOG = [];
    this.DONE = [];
    this.IN_PROGRESS = [];
    this.QA = [];
    this.TODO = [];
  }

  updateTaskStatus(id: number, progress: string) {
    let task: Task = new Task();
    task.id = id;
    task.progress = progress;
    console.log(task);
    this.tasksService.updateTaskStatus(task).subscribe(res => console.log(res));
  }

}
