var app = angular.module('testApp', [
    'angular-mapbox',
    'testController'
]);
var testController = angular.module('testController', []);

testController.controller('testCtrl', ['$scope', 'mapboxService', '$timeout', function ($scope, mapboxService, $timeout) {
    mapboxService.init({accessToken: 'pk.eyJ1Ijoiam9uZm9yIiwiYSI6ImNpZnB1Y3Y0OGh0NnJyN2x4OHFqNzdoajUifQ.vg3xNMJH-RgzRAZF7RzhzQ'});

    $timeout(function() {
        var map = mapboxService.getMapInstances()[0];
        var bounds = map.getBounds();
        $scope.timedOut = true;
        $timeout(function () {
            map.invalidateSize();
            map.fitBounds(bounds);
        }, 0);
    }, 2000);
}]);
