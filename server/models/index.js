var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages

    }, 
    post: function (mysql, data, cb) {
      db.query(mysql, data, function(err, result) {
        if (err) {
          throw err;
        } else {
          cb();
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (mysql, data, cb) {
      db.query(mysql, data, function(err, result) {
        if (err) {
          throw err;
        } else {
          cb();
        }
      });
    }
  }
};


