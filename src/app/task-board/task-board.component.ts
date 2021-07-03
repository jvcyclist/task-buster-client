import { TreeService } from './../tree.service';
import { ProjectsService } from './../services/projects.service';
import { SprintsService } from './../services/sprints.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../services/tasks.service';
import { Task } from '../shared/task.model';
import { Sprint } from '../shared/sprint.model';
import { Project } from '../shared/project.model';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  currentProject: Project = new Project();
  currentProjectId: number = 1;
  projects: Project[];

  currentSprint: Sprint = new Sprint();
  currentSprintId: number = 1;
  sprints: Sprint[];

  tasks: Task[];

  constructor(
    private tasksService: TasksService,
    private sprintsService: SprintsService,
    private treeService: TreeService,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.currentSprintId = this.treeService.currentSprintId;
    this.projectService.getProject(this.treeService.currentProjectId).subscribe(project =>{
      this.currentProject = project;
    })

    this.sprintsService.getSprint(this.treeService.currentSprintId).subscribe(sprint =>{
      this.currentSprint = sprint;
    })


    this.sprintsService.getSprintByProjectId(this.treeService.currentProjectId).subscribe(sprints =>{
      this.sprints = sprints;
    })

      this.tasksService.getAllTasksBySprintId(this.treeService.currentSprintId).subscribe(tasks => {
        this.tasks = tasks;
        this.showTasks();
      })

  }

  BACKLOG: Array<Task> = [];

  TODO: Array<Task> = [];

  IN_PROGRESS: Array<Task> = [];

  QA: Array<Task> = [];

  DONE: Array<Task> = [];

  showTasks(): void {
    this.cleanTasks();
    this.tasksService.getAllTasksBySprintId(this.currentSprintId).subscribe(tasks => {
      this.tasks = tasks;
      this.groupTasks(this.tasks);
     });

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
    this.treeService.currentSprintId = id;
    this.showTasks();
  }

}
