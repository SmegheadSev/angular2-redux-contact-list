import { Component } from '@angular/core';

@Component({
  selector: 'review-list',
  template: 
		`<div>
			<div>
				<h3>{{ name }}-{{ review }}-{{ rating }}</h3>
				<div *ngFor="let rev of newReviews">
					<review></review>
				</div>
			</div>
		</div>`
})

export class Review {
	name: string;
	review: string;
	rating: number;

	constructor() {
		this.name = 'asdf';
		this.review = 'zxcv';
		this.rating = 4;
	}
}

export class otherReview {
	name: string;
	review: string;
	rating: number;

	constructor(public aRating: number) {
		this.name = 'asdf';
		this.review = 'zxcv';
		this.rating = aRating;
	}
}