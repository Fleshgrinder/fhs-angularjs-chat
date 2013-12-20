Chat.App.directive("scroller", function () {
  return {
    restrict: "A",
    link: function ($scope, $element, attrs) {
      $element.bind("DOMSubtreeModified", function () {
        $element.scrollTop($element.height());
      });
    }
  };
});
