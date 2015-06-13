angular.module('starter')
.controller('OtherServicesController', function($scope, $ionicModal, $state, $http) {


   $http.get('json/otherServices.json').success(function(data){

      $scope.services = data;

  });

   $scope.completeStep = function(){
    $state.go('eventBriteCreator');
   }

});