Chat.App.factory('Chat', function ($rootScope) {
  var socket = io.connect("//localhost:1337");
  var lines = [];
  
  socket.on("backlog", function (backlog) {
    backlog.forEach(function (line) {
      lines.push(line);
    });
    $rootScope.$apply();
  });
  
  socket.on("message", function (line) {
    lines.push(line);
    $rootScope.$apply();
  });
  
  return {
    getAll: function () {
      return lines;
    },
    name: function (username) {
      socket.emit("rename", username);
    },
    send: function (msg) {
      socket.emit("message", msg);
    }
  };
});
