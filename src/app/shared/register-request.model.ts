import { User } from './../core/user/user.model';
import { Authority } from './authority.model';
import { RegisterType } from './register-type.enum';
export interface IRegisterRequest {
  registerType?: RegisterType;
  user?: User;
  authority: Authority;
}

// @ts-ignore
export class RegisterRequest implements IRegisterRequest {
  constructor(
              public registerType?: RegisterType,
              public user?: User,
              public authority?: Authority,
              ) {}
}
