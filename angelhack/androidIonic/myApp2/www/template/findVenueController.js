angular.module('starter')
.controller('FindVenueController', function($scope, $ionicModal, $http, $state, Facebook) {
    $scope.sliderIndex =0;
    $scope.headerText =[
        'Step 1: Select Event',
        'Step 2: Enter details',
        'Step 3: Choose a venue'
    ]

    $scope.paxRange = "";

    $scope.currentStep = function(){
        if($state.params.paxRange != undefined && $state.params.paxRange != "" ){
            return 2;
        }
        else if($state.params.categoryId != undefined &&$state.params.categoryId != ""){
            return 1;
        }
        else
            return 0;
    }

    $scope.slideHasChanged = function(index){
        $scope.sliderIndex = index;
    }
 
    $scope.selectCategory = function(category){
        $state.go('findVenue.pax',{categoryId: category.id});
    }
 
    $scope.selectPax = function(paxRange){
        $state.go('findVenue.pickVenue',{categoryId: $state.params.categoryId, paxRange: paxRange});
    }

    $http.get('json/categories.json').success(function(data){
       $scope.categories = data;
    });

    $http.get('json/venues.json').success(function(data){
       $scope.venues = data;
    });

   
   $scope.viewDetails = function(venueId){
        $state.go('venueViewer', {venueId: venueId});
   }

  function findPlaces(accessToken){
      $http.get('https://graph.facebook.com/v2.3/search?q=hotel kl&type=place&access_token='+accessToken).success(function(data){
         $scope.venues = data.data;
    });
    }
getLoginStatus();
    function getLoginStatus() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
           findPlaces(response.authResponse.accessToken);

        } else {
        }
      });
    }

});