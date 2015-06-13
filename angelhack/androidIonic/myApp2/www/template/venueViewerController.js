angular.module('starter')
.controller('VenueViewerController', function($scope, $ionicModal, $state, $http) {

  getData();

  function getData(){
    var venueId = $state.params.venueId;

    if(venueId != "" && venueId != undefined){

   // $http.get('https://graph.facebook.com/'+venueId).success(function(data){
   //         $scope.selectedVenue = data;
   //    });
   //  }

   $http.get('json/venues.json').success(function(data){


    data.forEach(function(item){

      if(item.id == venueId){
        $scope.selectedVenue = item;
      }
    })

  });

   $scope.completeBooking = function(){

    $state.go('bookingConfirmation', {venueId: $state.params.venueId});
   }

 }
}
});


