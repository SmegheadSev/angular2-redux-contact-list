import { Component } from '@angular/core';

@Component({
  selector: 'social-media-link',
  templateUrl: 'app/SocialMediaLink/socialMediaLink.html',
})

export class SocialMediaLink {
	address: string;
	icon: string;

	constructor() {
		this.address = 'asdf';
		this.icon = 'zxcv';
	}
}