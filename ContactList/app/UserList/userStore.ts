import Immutable = require('immutable');
import { createStore } from 'redux';
import { IUserAction } from './userActions';
import { reducer } from '../reducer';

export class User {
  id: number;
  name: String;
  star: boolean;
}

export class UserStore {
  store = createStore(reducer, Immutable.List<User>());

  get users(): Immutable.List<User> {
    return this.store.getState();
  }

  dispatch(action: IUserAction) {
    this.store.dispatch(action);
  }
}