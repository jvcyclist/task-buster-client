import { Task } from './task.model';
export interface ISprint {
  id?: number;
  startDate?: Date;
  endDate?: Date;
  plannedStoryPoints?: number;
  taskList?: Task[];
}

// @ts-ignore
export class Sprint implements ISprint {
  constructor(
              public id?: number,
              public startDate?: Date,
              public endDate?: Date,
              public plannedStoryPoints?: number,
              public taskList?: Task[]
              ) {}
}
