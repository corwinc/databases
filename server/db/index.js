var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'root',
  password: 'sat',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) { throw err; }
});

// connection.query(query, function(err, result) {
//   if (err) {
//     throw err;
//   } else {
//     // send response 201
//   }
// });

module.exports = connection;

