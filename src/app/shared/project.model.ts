export interface IProject {
  id?: number;
  title?: string;
  description?: string;
}

// @ts-ignore
export class Project implements ITask {
  constructor(public id?: number,
              public title?: string,
              public description?: string) {}
}
