import { Component } from '@angular/core';
import { ContactStore } from './contact-store';
import Contact from './contact';
import { addContact } from './actions';
import { UserList } from './UserList/userList';
import { UserStore } from './UserList/userStore';
import { SocialMediaLink } from './SocialMediaLink/socialMediaLink';

@Component({
  selector: 'contact-list',
  templateUrl: 'app/contact-list.html',
  styleUrls: ['app/contact-list.css'],
  directives: [Contact, UserList, SocialMediaLink]
})

export class ContactList {
	contactID: number;
	something: SocialMediaLink[];

	constructor(private store: ContactStore) {
		this.contactID = 0;
		this.something = [];
		this.something.push(new SocialMediaLink());
		this.something.push(new SocialMediaLink());
	}

  addContact(contact) {
    this.store.dispatch(addContact(contact, this.contactID++));
  }
}
