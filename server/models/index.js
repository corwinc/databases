var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages

    }, 
    post: function (query, data, callback) { // a function which can be used to insert a message into the database
      // create post request to mysql
      console.log('res: ', res);
      console.log('data: ', data);
      db.query(query, data, callback);
        // breakup data into it's variables: username, message, roomname;
        // plug it into a query string
        // call connection.query w/ string
          // if success: sendResponse
          // if err: sendResponse w/ error
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


