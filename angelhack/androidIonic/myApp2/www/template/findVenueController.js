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
        $scope.$root.endDate = "15-06-2015";
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
        var d = new Date(val);
        var dateString = d.format("dd-mm-yy");
        $scope.$root.startDate = dateString;
        console.log('Selected date is : ', dateString);
    }
};

$scope.toDate = new Date();

$scope.toDatePickerCallback = function (val) {
    if(typeof(val)==='undefined'){      
        console.log('Date not selected');
    }else{
        var d = new Date(val);
        var dateString = d.format("dd-mm-yy");
        $scope.$root.endDate = dateString;
        console.log('Selected date is : ', dateString);
    }
};

$scope.slots = [{epochTime: 12600, format: 12, step: 15},{epochTime: 12600, format: 12, step: 15}];

$scope.timeFromPickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(val-28800);
    var dateString = d.format("HH:MM tt");
    $scope.$root.startTime = dateString;
    console.log('Selected time is : ', dateString);    // `val` will contain the selected time in epoch
  }
};

$scope.timeToPickerCallback = function (val) {
  if (typeof (val) === 'undefined') {
    console.log('Time not selected');
  } else {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(val-28800);
    var dateString = d.format("HH:MM tt");
    $scope.$root.endTime = dateString;
    console.log('Selected time is : ', dateString);    // `val` will contain the selected time in epoch
  }
};

var dateFormat = function () {
        var    token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            timezoneClip = /[^-+\dA-Z]/g,
            pad = function (val, len) {
                val = String(val);
                len = len || 2;
                while (val.length < len) val = "0" + val;
                return val;
            };
    
        // Regexes and supporting functions are cached through closure
        return function (date, mask, utc) {
            var dF = dateFormat;
    
            // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
            if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                mask = date;
                date = undefined;
            }
    
            // Passing date through Date applies Date.parse, if necessary
            date = date ? new Date(date) : new Date;
            if (isNaN(date)) throw SyntaxError("invalid date");
    
            mask = String(dF.masks[mask] || mask || dF.masks["default"]);
    
            // Allow setting the utc argument via the mask
            if (mask.slice(0, 4) == "UTC:") {
                mask = mask.slice(4);
                utc = true;
            }
    
            var    _ = utc ? "getUTC" : "get",
                d = date[_ + "Date"](),
                D = date[_ + "Day"](),
                m = date[_ + "Month"](),
                y = date[_ + "FullYear"](),
                H = date[_ + "Hours"](),
                M = date[_ + "Minutes"](),
                s = date[_ + "Seconds"](),
                L = date[_ + "Milliseconds"](),
                o = utc ? 0 : date.getTimezoneOffset(),
                flags = {
                    d:    d,
                    dd:   pad(d),
                    ddd:  dF.i18n.dayNames[D],
                    dddd: dF.i18n.dayNames[D + 7],
                    m:    m + 1,
                    mm:   pad(m + 1),
                    mmm:  dF.i18n.monthNames[m],
                    mmmm: dF.i18n.monthNames[m + 12],
                    yy:   String(y).slice(2),
                    yyyy: y,
                    h:    H % 12 || 12,
                    hh:   pad(H % 12 || 12),
                    H:    H,
                    HH:   pad(H),
                    M:    M,
                    MM:   pad(M),
                    s:    s,
                    ss:   pad(s),
                    l:    pad(L, 3),
                    L:    pad(L > 99 ? Math.round(L / 10) : L),
                    t:    H < 12 ? "a"  : "p",
                    tt:   H < 12 ? "am" : "pm",
                    T:    H < 12 ? "A"  : "P",
                    TT:   H < 12 ? "AM" : "PM",
                    Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                    o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                    S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                };
    
            return mask.replace(token, function ($0) {
                return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
            });
        };
    }();
    
    // Some common format strings
    dateFormat.masks = {
        "default":      "ddd mmm dd yyyy HH:MM:ss",
        shortDate:      "m/d/yy",
        mediumDate:     "mmm d, yyyy",
        longDate:       "mmmm d, yyyy",
        fullDate:       "dddd, mmmm d, yyyy",
        shortTime:      "h:MM TT",
        mediumTime:     "h:MM:ss TT",
        longTime:       "h:MM:ss TT Z",
        isoDate:        "yyyy-mm-dd",
        isoTime:        "HH:MM:ss",
        isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };
    
    // Internationalization strings
    dateFormat.i18n = {
        dayNames: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ]
    };
    
    // For convenience...
    Date.prototype.format = function (mask, utc) {
        return dateFormat(this, mask, utc);
    };
});