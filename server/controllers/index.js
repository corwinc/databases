var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages

    }, 
    post: function (req, res) {
      console.log('hello: ', req.body);

      var usernameId = 'SELECT id FROM usernames where name =' + req.body.username + "'";// 'select id from usernames where name='req.body.username'
      var message = req.body.message;
      var roomname = req.body.roomname;

      models.messages.post('INSERT INTO messages (username,roomname,message) VALUES (' + usernameId + ',' + roomname + ', ' + message + ')', req.body, function(err, res) {
        if (err) {
          console.log('messages err: ');
          throw err;
        } else {
          console.log('successful post to db!');
          res.send('something');
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log('user data body: ', req.body);
      models.users.post('INSERT INTO usernames SET ?', req.body, function(err, res) {
        if (err) {
          console.log('usernames err: ');
          throw err;
        } else {
          console.log('successful post to db!');
          res.send('something');
        }
      });
    }
  }
};