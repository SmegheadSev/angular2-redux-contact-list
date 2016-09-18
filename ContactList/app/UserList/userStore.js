"use strict";
var Immutable = require('immutable');
var redux_1 = require('redux');
var reducer_1 = require('../reducer');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserStore = (function () {
    function UserStore() {
        this.store = redux_1.createStore(reducer_1.reducer, Immutable.List());
    }
    Object.defineProperty(UserStore.prototype, "users", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    UserStore.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    return UserStore;
}());
exports.UserStore = UserStore;
//# sourceMappingURL=userStore.js.map