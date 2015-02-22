/// <reference path="../../../typings/angularjs/angular.d.ts" />
define(["require", "exports", "../buxNextClientCoreModule"], function (require, exports, coreModule) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            var Controllers;
            (function (Controllers) {
                var authController = (function () {
                    function authController($scope) {
                        this.$scope = $scope;
                    }
                    authController.$inject = ["$scope"];
                    return authController;
                })();
                Controllers.authController = authController;
                coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('authController', authController);
            })(Controllers = Core.Controllers || (Core.Controllers = {}));
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
