Chat.App.directive("textarea", function () {
  return {
    restrict: "E",
    link: function ($scope, $element, attrs) {
      var $form = $($element[0].form);
      $element.keypress(function (e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          $form.submit();
        }
      });
    }
  };
});
