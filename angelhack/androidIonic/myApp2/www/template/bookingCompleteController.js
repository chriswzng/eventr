angular.module('starter')
.controller('BookingCompleteController', function($scope, $ionicModal, $state, $http) {


   $http.get('json/venues.json').success(function(data){

	var venueId = $state.params.venueId;

    data.forEach(function(item){

      if(item.id == venueId){
        $scope.selectedVenue = item;
      }
    })

  });

   $scope.makePayment = function(){
   	$state.go('otherServices');
   }

});