var Line = require('./Line');

// the room model
var Room = function() {
  var lines = [];
  var users = [];

  // a user joins a room
  this.join = function(user) {
    // send the backlog to the user
    user.socket.emit('backlog', this.getBacklog());
    // save to the users array
    users.push(user);
  };

  // get the backlog
  this.getBacklog = function() {
    return lines;
  };

  // add a new line
  this.addLine = function(text, user) {
    // create a new line
    var line = new Line(text, user.data);
    // push line to the backlog
    lines.push(line);
    // broadcast line
    broadcastLine(line);
  };

  // broadcast line to all users
  function broadcastLine(line) {
    users.forEach(function(user) {
      // emit line to the user
      user.socket.emit('message', line);
    });
  }
};

module.exports = Room;
