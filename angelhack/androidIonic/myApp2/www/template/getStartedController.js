angular.module('starter')
.controller('GetStartedController', function($scope, $ionicModal, $state) {

$scope.contact = {
    name: 'Mittens Cat2',
    info: 'Tap anywhere on the card to open the modal'
  }

$scope.rentVenue = function(){
  $state.go('venueFinder');
}

$scope.hostVenue = function(){
  $state.go('hostVenue');
}

});