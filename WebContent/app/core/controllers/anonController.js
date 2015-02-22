/// <reference path="../../../typings/angularjs/angular.d.ts" />
define(["require", "exports", "../buxNextClientCoreModule"], function (require, exports, coreModule) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            var Controllers;
            (function (Controllers) {
                var anonController = (function () {
                    function anonController($scope) {
                        this.$scope = $scope;
                        $scope.title1 = 'Button223';
                        $scope.title4 = 'Warn';
                        $scope.isDisabled = true;
                        $scope.googleUrl = 'http://google.com';
                    }
                    anonController.$inject = ["$scope"];
                    return anonController;
                })();
                Controllers.anonController = anonController;
                coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('anonController', anonController);
            })(Controllers = Core.Controllers || (Core.Controllers = {}));
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
