Chat.App.controller('ChatController', function ($scope, Chat) {
  $scope.lines = Chat.getAll();
  return {};
});
