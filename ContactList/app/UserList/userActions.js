"use strict";
function addUser(name, id) {
    return {
        type: 'ADD',
        id: id,
        name: name
    };
}
exports.addUser = addUser;
function removeUser(id) {
    return {
        type: 'REMOVE',
        id: id
    };
}
exports.removeUser = removeUser;
function starUser(id) {
    return {
        type: 'STAR',
        id: id
    };
}
exports.starUser = starUser;
//# sourceMappingURL=userActions.js.map