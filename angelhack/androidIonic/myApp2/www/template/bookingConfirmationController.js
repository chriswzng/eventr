angular.module('starter')
.controller('BookingConfirmationController', function($scope, $ionicModal, $state) {
     $scope.payBooking = function(){

        $state.go('bookingComplete', {venueId: $state.params.venueId});
   }
});