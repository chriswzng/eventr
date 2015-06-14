angular.module('starter')
.controller('VenueViewerController', function($scope, $ionicModal, $state, $http) {

  getData();

  function getData(){
    var venueId = $state.params.venueId;

    if(venueId != "" && venueId != undefined){

  
   $http.get('json/venues.json').success(function(data){
    data.forEach(function(item){
      if(item.id == venueId){
        $scope.selectedVenue = item;
        $scope.$root.locationName = item.name;
        $scope.$root.price = item.price;
        return;
      }
    })

         $http.get('https://graph.facebook.com/'+venueId).success(function(item){
          $scope.selectedVenue = {
                name: item.name, 
                id: item.id, 
                imageUrl: 'https://graph.facebook.com/'+item.id+'/picture?type=large', 
                city: item.location != undefined ? item.location.street : "", 
                state: item.location != undefined ? item.location.city: "",
                latitude: item.location != undefined ? item.location.latitude : 0,
                longitude: item.location !=undefined ? item.location.longitude: 0,
                description: item.description,
                price: "RM "+ Math.round(Math.random() * (600 - 120) + 120),
                stars: new Array( Math.round(Math.random() * (5 - 1) + 1)),
                phone: item.phone,
                isFacebook: true,
                bannerImg: item.cover == undefined ? 'img/default.png' : item.cover.source,
                suitableFor: "Birthday, Wedding, Conference, Seminar, Party, Meeting, Product Launch"
            };
      });
    

    
  });

   $scope.completeBooking = function(){
    
    $state.go('bookingConfirmation', {venueId: $state.params.venueId});
   }

 }
}
});