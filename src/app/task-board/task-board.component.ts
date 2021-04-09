import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resources = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  backlog = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  toDo = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  doing = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  blocked = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  qC = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

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


  addResourcesItem(newItem) {
    this.resources.push(newItem);
  }

  addBacklogItem(newItem) {
    this.backlog.push(newItem);
  }

  addToDoItem(newItem) {
    this.toDo.push(newItem);
  }

  addDoingItem(newItem) {
    this.doing.push(newItem);
  }

  addBlockedItem(newItem) {
    this.blocked.push(newItem);
  }

  addQCItem(newItem) {
    this.qC.push(newItem);
  }

  addDoneItem(newItem) {
    this.done.push(newItem);
  }

}
