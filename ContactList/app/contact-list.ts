import { Component } from '@angular/core';
import { ContactStore } from './contact-store';
import Contact from './contact';
import { addContact } from './actions';
import { UserList } from './UserList/userList';
import { UserStore } from './UserList/userStore';
import { SocialMediaLink } from './SocialMediaLink/socialMediaLink';
import { Review, otherReview } from './Review/review';

@Component({
  selector: 'contact-list',
  templateUrl: 'app/contact-list.html',
  styleUrls: ['app/contact-list.css'],
  directives: [Contact, UserList, SocialMediaLink, Review],
	//providers: [Number]
})

export class ContactList {
	contactID: number;
	something: SocialMediaLink[];
	newReviews: Review[];
	otherReviews: otherReview[];

	constructor(private store: ContactStore) {
		this.contactID = 0;
		this.something = [];
		this.something.push(new SocialMediaLink());
		this.something.push(new SocialMediaLink());
		this.newReviews = [];
		this.newReviews.push(new Review());//'sometesting', 5));
		this.otherReviews = [];
		this.otherReviews.push(new otherReview(4));
		this.otherReviews.push(new otherReview(5));
	}

  addContact(contact) {
    this.store.dispatch(addContact(contact, this.contactID++));
  }
}
