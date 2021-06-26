import { SprintsService } from './../services/sprints.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../services/tasks.service';
import { Task } from '../shared/task.model';
import { Sprint } from '../shared/sprint.model';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  currentSprint: Sprint;
  currentSprintId: number;
  sprints: Sprint[];

  tasks: Array<Task>;

  constructor(
    private tasksService: TasksService,
    private sprintsService: SprintsService
  ) { }

  ngOnInit(): void {

    this.sprintsService.getSprints().subscribe(sprints => {
      this.sprints = sprints;
    })

    this.sprintsService.getCurrentSprint().subscribe(
      currentSprint => {
        this.currentSprint = currentSprint;
        this.tasks = currentSprint.taskList;
        this.currentSprintId = currentSprint.id;
        this.showTasks();
      }
      )
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
    task.sprint_id = this.currentSprintId;

    this.tasksService.addTask(task).subscribe(res => {
      this.sprintsService.getSprints().subscribe(spr => {
        this.sprints = spr;
        this.tasks = this.sprints.filter(s => s.id == this.currentSprintId)[0].taskList
        this.showTasks();
      })
    })
    console.log('Current sprint: ' + this.currentSprintId);
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

  changeCurrentSprint(id: number){
    this.currentSprint = this.sprints.filter(s => s.id == id)[0]
    this.tasks = this.currentSprint.taskList;
    this.showTasks();
  }

}
