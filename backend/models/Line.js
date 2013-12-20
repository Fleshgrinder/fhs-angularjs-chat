// the line model 
var Line = function(text, user) {
  this.text = text;
  this.user = user;
  
  var d = new Date();
  this.time = d.getHours() + ":" + d.getMinutes();
};

module.exports = Line;
