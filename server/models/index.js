var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages

    }, 
    post: function (req, res) {
      // var usernameQuery = 'SELECT id FROM usernames where name =' + req.body.username + "'";// 'select id from usernames where name='req.body.username'
      var id;
      var message = req.body.message;
      var roomname = req.body.roomname;

      db.query('select id from usernames where username="' + req.body.username + '"', function(error, results, fields) {
        if (error) {
          throw error; 
        } // might not need to do this query b/c foreign key
        id = results[0]; //returns an array
        console.log(id);
        db.query('INSERT INTO messages (username_id,roomname_id,message) VALUES (' + id + ',' + roomname + ', ' + message + ')', function(err, response) {
          if (err) {
            throw err;
          } else {
            res.status(200).send();
          }
        });
      });


    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    
    post: function (req, res) {
      console.log('user data body: ', req.body);
      db.query('INSERT INTO usernames SET ?', req.body, function(err, response) {
        if (err) {
          throw err;
        } else {
          res.status(200).send();
        }
      });
    }



    // post: function (mysql, data, cb) {
    //   db.query(mysql, data, function(err, result) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       cb();
    //     }
    //   });
    // }
  }
};


