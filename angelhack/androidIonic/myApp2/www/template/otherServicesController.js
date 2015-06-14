angular.module('starter')
.controller('OtherServicesController', function($scope, $ionicModal, $state, $http) {


   $http.get('json/otherServices.json').success(function(data){

      $scope.services = data;

  });

   $scope.backMain  =function(){
    $state.go('getStarted');
    }

});