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
      $http.get('https://graph.facebook.com/v2.3/search?q=cafe kuala lumpur pub&type=place&access_token='+accessToken).success(function(data){
         data.data.forEach(function(item){

            $scope.venues.push({
                name: item.name, 
                id: item.id, 
                imageUrl: 'https://graph.facebook.com/'+item.id+'/picture?type=large', 
                city: item.location != undefined ? item.location.street : "", 
                state: item.location != undefined ? item.location.city: "",
                latitude: item.location != undefined ? item.location.latitude : 0,
                longitude: item.location !=undefined ? item.location.longitude: 0,
                description: item.description
            });
         });
    });
    }
//getLoginStatus();
    function getLoginStatus() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
           findPlaces(response.authResponse.accessToken);

        } else {
        }
      });
    }

$scope.datePickerCallback = function (val) {
    if(typeof(val)==='undefined'){      
        console.log('Date not selected');
    }else{
        console.log('Selected date is : ', val);
    }
};

$scope.slots = [{epochTime: 12600, format: 12, step: 15},{epochTime: 12600, format: 12, step: 15}];

$scope.timePickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    console.log('Selected time is : ', val);    // `val` will contain the selected time in epoch
  }
};

});