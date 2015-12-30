var myApp = angular.module('myApp', []);

function MyCtrl($scope) {
    $scope.divwidth = 400;
    $scope.divheight = 300;
    $scope.show = true;
    $scope.divtop = 80;
    $scope.divleft = 50;
    $scope.divtop2 = 180;
    $scope.divleft2 = 150;
};

myApp.directive('draggable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.draggable({
                cursor: "move",
                stop: function (event, ui) {
                    scope[attrs.xpos] = ui.position.left;
                    scope[attrs.ypos] = ui.position.top;
                    scope.$apply();
                }
            });
        }
    };
});