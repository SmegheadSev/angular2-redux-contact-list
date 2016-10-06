"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Review = (function () {
    function Review() {
        this.name = 'asdf';
        this.review = 'zxcv';
        this.rating = 4;
    }
    Review = __decorate([
        core_1.Component({
            selector: 'review-list',
            template: "<div>\n\t\t\t<div>\n\t\t\t\t<h3>{{ name }}-{{ review }}-{{ rating }}</h3>\n\t\t\t</div>\n\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Review);
    return Review;
}());
exports.Review = Review;
var otherReview = (function () {
    function otherReview(aRating) {
        this.aRating = aRating;
        this.name = 'asdf';
        this.review = 'zxcv';
        this.rating = aRating;
    }
    return otherReview;
}());
exports.otherReview = otherReview;
//# sourceMappingURL=review.js.map