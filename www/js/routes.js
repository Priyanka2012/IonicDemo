angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app'
        , abstract: true
        , templateUrl: 'templates/menu.html'
        , controller: 'AppCtrl'
    })

    .state('app.deviceInfo', {
        url: '/deviceInfo'
        , views: {
            'menuContent': {
                templateUrl: 'templates/deviceInfo.html'
                , controller: 'DeviceInfoCtrl as deviceInfo'
            }
        }
    })

    .state('app.camera', {
        url: '/camera'
        , views: {
            'menuContent': {
                templateUrl: 'templates/camera.html'
                , controller: 'CameraCtrl as cameraCtrl'
            }
        }
    })

    .state('app.welcome', {
        url: '/welcome'
        , views: {
            'menuContent': {
                templateUrl: 'templates/welcome.html'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/welcome');
});