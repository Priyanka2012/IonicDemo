angular.module('starter.controllers', [])

.controller('AppCtrl', function () {

})

.controller('DeviceInfoCtrl', function () {

    //Device Ready
    ionic.Platform.ready(function () {
        // will execute when device is ready
    });

    this.platform = ionic.Platform.platform();
    this.version = ionic.Platform.version();

    /*** Exit the App ***/
    ionic.Platform.exitApp(); // stops the app
})

.controller('CameraCtrl', function ($cordovaCamera, $scope) {
    console.log(ionic.Platform.platform());

    $scope.selectedPhoto = "img/default-placeholder.png";
    this.capturePhotoFromCamera = function () {
        var options = {
            quality: 75
            , destinationType: Camera.DestinationType.DATA_URL
            , sourceType: Camera.PictureSourceType.CAMERA
            , allowEdit: true
            , encodingType: Camera.EncodingType.JPEG
            , targetWidth: 400
            , targetHeight: 400
            , saveToPhotoAlbum: false
            , correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            // Using $scope as this.selectedPhoto was not setting the captured image  
            $scope.selectedPhoto = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    }

    this.selectPhotoFromGallery = function () {
        var options = {
            quality: 75
            , destinationType: Camera.DestinationType.DATA_URL
            , sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            , allowEdit: true
            , encodingType: Camera.EncodingType.JPEG
            , targetWidth: 400
            , targetHeight: 400
            , popoverOptions: CameraPopoverOptions
            , saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            // Using $scope as this.selectedPhoto was not setting the selected image  
            $scope.selectedPhoto = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    }
})