angular.module('starter')
.controller('EventBriteCreatorController', function($scope, $ionicModal, $state, $http) {


$scope.backMain  =function(){
	$state.go('getStarted');
}
   

});