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
var userStore_1 = require('./userStore');
var userActions_1 = require('./userActions');
var User = (function () {
    function User(store) {
        this.store = store;
    }
    User.prototype.removeUser = function (user) {
        this.store.dispatch(userActions_1.removeUser(user.id));
    };
    User.prototype.starUser = function (user) {
        this.store.dispatch(userActions_1.starUser(user.id));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', userStore_1.User)
    ], User.prototype, "user", void 0);
    User = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: 'app/UserList/user.html',
            styleUrls: ['app/UserList/user.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [userStore_1.UserStore])
    ], User);
    return User;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=user.js.map