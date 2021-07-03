import { Task } from './task.model';
export interface ISprint {
  id?: number;
  startDate?: Date;
  endDate?: Date;
  plannedStoryPoints?: number;
  project_id?: number
  taskList?: Task[];
}

// @ts-ignore
export class Sprint implements ISprint {
  constructor(
              public id?: number,
              public startDate?: Date,
              public endDate?: Date,
              public plannedStoryPoints?: number,
              public project_id?: number,
              public taskList?: Task[]
              ) {}
}
