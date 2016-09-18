import { User as UserModel} from './userStore';

export interface IUserAction {
  type: string;
  id: number;
  name?: string;
}

export function addUser(name: string, id: number): IUserAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeUser(id: number): IUserAction {
  return {
    type: 'REMOVE',
    id
  };
}

export function starUser(id: number): IUserAction {
  return {
    type: 'STAR',
    id
  };
}