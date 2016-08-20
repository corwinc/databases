var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // models.messages.get...

    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('messages req body:', req.body);
      models.messages.post(res, req.data);
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //models.users.get...
    },
    post: function (req, res) {
      console.log('user data body: ', req.body); // 
      models.users.post('INSERT INTO messages SET ?', req.body, function(err, res) {
        if (err) {
          throw err;
        } else {
          res.status(200).send('Success');
        }
      });

      // function(err, res) {
      //   if (err) {
      //     throw err;
      //   } else {
      //     var statusCode = 200;
      //     res.writeHead(statusCode, headers);
      //     res.end(JSON.stringify(data));
      //   }
      // }


      // app.post('/users', function(req, res) {
      //   var username = req.body.username;
      //   console.log('username: ', username);
      //   res.end('yes');
      // });

    }
  }
};

