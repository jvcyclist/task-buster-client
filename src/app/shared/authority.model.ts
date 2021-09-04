import { User } from './../core/user/user.model';
import { Sprint } from "./sprint.model";

export interface IAuthority {
  id?: number;
  username?: string;
  authority?: string;
}

// @ts-ignore
export class Authority implements IAuthority {
  constructor(public id?: number,
              public username?: string,
              public authority?: string
              ){}

}
