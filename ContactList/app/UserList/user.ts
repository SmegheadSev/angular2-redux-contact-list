import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { UserStore, User as UserModel} from './userStore';
import { removeUser, starUser } from './userActions';

@Component({
  selector: 'user',
  templateUrl: 'app/UserList/user.html',
  styleUrls: ['app/UserList/user.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export default class User {
  @Input()
  user: UserModel;

  constructor(private store: UserStore) { }

  removeUser(user) {
    this.store.dispatch(removeUser(user.id));
  }

  starUser(user) {
    this.store.dispatch(starUser(user.id));
  }
}
