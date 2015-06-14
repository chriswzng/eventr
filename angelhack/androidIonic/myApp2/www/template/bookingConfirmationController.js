angular.module('starter')
.controller('BookingConfirmationController', function($scope, $ionicModal, $state) {
    $scope.paxRange = $scope.$root.paxRange;
    $scope.locationName = $scope.$root.locationName;
    $scope.price = $scope.$root.price;
    $scope.startDate = $scope.$root.startDate;
	$scope.startTime = $scope.$root.startTime; 
  	$scope.endTime = $scope.$root.endTime; 
     $scope.payBooking = function(){
        $state.go('bookingComplete', {venueId: $state.params.venueId});
   }
});