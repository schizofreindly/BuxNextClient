/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../coreDefinitions.ts" />
define(["require", "exports", "../buxNextClientCoreModule"], function (require, exports, coreModule) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            var Controllers;
            (function (Controllers) {
                var anonController = (function () {
                    function anonController($scope, $mdSidenav) {
                        var _this = this;
                        this.$scope = $scope;
                        this.$mdSidenav = $mdSidenav;
                        this.init();
                        this.$scope.toggleNavbar = function (id) {
                            _this.toggleNavbar(id);
                        };
                    }
                    anonController.prototype.init = function () {
                        this.$scope.navBarIsOpen = true;
                    };
                    anonController.prototype.toggleNavbar = function (id) {
                        this.$scope.navBarIsOpen = !this.$scope.navBarIsOpen;
                    };
                    anonController.$inject = ["$scope", "$mdSidenav"];
                    return anonController;
                })();
                Controllers.anonController = anonController;
                coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('anonController', anonController);
            })(Controllers = Core.Controllers || (Core.Controllers = {}));
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
