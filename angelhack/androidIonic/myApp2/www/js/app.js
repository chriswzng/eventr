// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngOpenFB','facebook','ionic-datepicker','ionic-timepicker'])
.run(function ($ionicPlatform, ngFB) {
  ngFB.init({appId: '903664066366504'});
//.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('login', {
    url: '/',
    templateUrl: 'template/login.html'
  })
  .state('getStarted',{
    url :'/getStarted',
    templateUrl: 'template/getStarted.html'
  })
  .state('hostVenue',{
    url: '/hostVenue',
    templateUrl: 'template/hostVenue.html'
  })
  .state('findVenue',{
    url: '/findVenue',
    templateUrl: 'template/findVenue.html'
  })
  .state('findVenue.pax',{
    url: '/findVenue/:categoryId',
    templateUrl: 'template/findVenue.html'
  })
  .state('findVenue.pickVenue',{
    url: '/findVenue/:categoryId/:paxRange',
    templateUrl: 'template/findVenue.html'
  })
  .state('venueViewer',{
    url: '/venueViewer/:venueId',
    templateUrl: 'template/venueViewer.html'
  })
})
.config(function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('903664066366504');
  })
.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|tel|geo):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }]);
