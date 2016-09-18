import { Component } from '@angular/core';
import { UserStore } from './userStore';
import User from './user';
import { addUser } from './userActions';

@Component({
  selector: 'user-list',
	providers: [UserStore],
  templateUrl: 'app/UserList/userList.html',
  styleUrls: ['app/UserList/userList.css'],
  directives: [User]
})

export class UserList {
	userId: number;

	constructor(private store: UserStore) {
		this.userId = 0;
	}

  addUser(user) {
    this.store.dispatch(addUser(user, this.userId++));
  }
}
