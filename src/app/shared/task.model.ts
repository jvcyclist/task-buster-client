export interface ITask {
  id?: number;
  name?: string;
  description?: string;
  storyPoints?: number;
  progress?: string;
}

// @ts-ignore
export class Task implements ITask {
  constructor(public id?: number,
              public name?: string,
              public description?: string,
              public storyPoints?: number,
              public progress?: string) {}
}
