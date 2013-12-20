Chat.App.directive("message", function () {
  var smileBaby = {
    ":D": "laughing",
    ":)": "smile",
    ":(": "sad",
    ";)": "wink",
    "(mooning)": "mooning",
    "(heidy)": "heidy",
    "(finger)": "finger",
    "(rofl)": "rofl",
    "(puke)": "puke",
    "(hug)": "hug",
  };
  return {
    restrict: "A",
    link: function ($scope, $element, attrs) {
      var text = $scope.line.text.split("\n").join("<br>").split(" ");
      text.forEach(function (e, i, a) {
        if (smileBaby[e]) {
          a[i] = "<img src='/img/" + smileBaby[e] + ".gif' alt=''>";
        }
      });
      $element.html(text.join(" "));
    }
  };
});
