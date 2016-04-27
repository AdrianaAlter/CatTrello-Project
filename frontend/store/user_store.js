var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/user_constants.js');

var UserStore = new Store(Dispatcher);
var _users = [];

UserStore.all = function () {
  return _users;
};

UserStore.resetUsers = function (user) {
  _users = user;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.SINGLE_USER_RECEIVED:
      UserStore.resetUsers(payload.user);
      UserStore.__emitChange();
      break;
    }
};

module.exports = UserStore;
