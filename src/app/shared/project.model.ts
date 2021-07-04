import { User } from './../core/user/user.model';
import { Sprint } from "./sprint.model";

export interface IProject {
  id?: number;
  title?: string;
  description?: string;
  sprintList?: Sprint[];
  adminUser?: User;
}

// @ts-ignore
export class Project implements IProject {
  constructor(public id?: number,
              public title?: string,
              public description?: string,
              public sprintList?: Sprint[],
              public adminUser?: User) {}
}
