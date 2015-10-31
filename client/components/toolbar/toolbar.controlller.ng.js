'use strict'

angular.module('sportsApp')
    .controller('ToolbarCtrl', function($scope, $ionicPopover, $ionicSideMenuDelegate) {
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });

        $scope.openPerfilMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
    });