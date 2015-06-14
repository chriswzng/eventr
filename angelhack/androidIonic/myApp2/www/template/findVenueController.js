angular.module('starter')
.controller('FindVenueController', function($scope, $ionicModal, $http, $state, Facebook) {
    $scope.sliderIndex =0;
    $scope.headerText =[
        'Step 1: Select Event',
        'Step 2: Enter details',
        'Step 3: Choose a venue'
    ]

    $scope.paxRange = "";
    $scope.$root.startTime = "08:30 AM";
    $scope.$root.endTime = "12:30 PM";
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
        $scope.$root.startDate = "14-06-2015";
        $state.go('findVenue.pax',{categoryId: category.id});
    }
 
    $scope.inputData = function(paxRange){
        $scope.$root.paxRange = paxRange;
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
                description: item.description,
                price: "RM "+ Math.round(Math.random() * (600 - 120) + 120),
                stars: new Array( Math.round(Math.random() * (5 - 1) + 1)),
                isFacebook: true,
                bannerImg: item.cover == undefined ? 'img/default.png' : item.cover.photo
            });
         });
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

$scope.fromDate = new Date();

$scope.fromDatePickerCallback = function (val) {
    if(typeof(val)==='undefined'){      
        console.log('Date not selected');
    }else{
        $scope.$root.startDate = val;
        console.log('Selected date is : ', val);
    }
};

$scope.toDate = new Date();

$scope.toDatePickerCallback = function (val) {
    if(typeof(val)==='undefined'){      
        console.log('Date not selected');
    }else{
        $scope.$root.endDate = val;
        console.log('Selected date is : ', val);
    }
};

$scope.slots = [{epochTime: 12600, format: 12, step: 15},{epochTime: 12600, format: 12, step: 15}];

$scope.timeFromPickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    $scope.$root.startTime = val;
    console.log('Selected time is : ', val);    // `val` will contain the selected time in epoch
  }
};

$scope.timeToPickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    $scope.$root.endTime = val;
    console.log('Selected time is : ', val);    // `val` will contain the selected time in epoch
  }
};
});