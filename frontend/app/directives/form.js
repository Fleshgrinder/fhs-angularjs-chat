Chat.App.directive("form", function (Chat) {
  return {
    restrict: "E",
    link: function ($scope, $element, attrs) {
      if ($element.attr("id") === "chat-form") {
        var $txt = $("textarea", $element);
        $element.submit(function (e) {
          e.preventDefault();
          Chat.send($txt.val());
          $txt.val("");
        });
      }
      else {
        $("#username").focus();
        $element.submit(function (e) {
          var $uw = $("#username-wrapper");
          e.preventDefault();
          Chat.name($("#username", $uw).val());
          $uw.fadeOut("slow", function () {
            $uw.remove();
            $("textarea").focus();
          });
        });
      }
    }
  };
});
