angular.module('starter')
.controller('BookingConfirmationController', function($scope, $ionicModal, $state) {
    $scope.paxRange = $scope.$root.paxRange;
    $scope.locationName = $scope.$root.locationName;
    $scope.price = $scope.$root.price;
    $scope.startDate = $scope.$root.startDate;

     $scope.payBooking = function(){
        $state.go('bookingComplete', {venueId: $state.params.venueId});
   }
});