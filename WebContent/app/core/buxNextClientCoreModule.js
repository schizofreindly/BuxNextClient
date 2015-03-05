/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
/// <amd-dependency path="bootstrap-modal"/>
define(["require", "exports", './iconSetConfig', './directives/hamburgerButton/hamburgerButtonDirective', './directives/focusTabOnLoad/focusTabOnLoadDirective', './directives/stopEvent/stopEventDirective', "angular", "angular-material", "bootstrap-modal"], function (require, exports, iconSetConfigImport, hamburgerButtonDirectiveImport, focusTabOnLoadDirectiveImport, stopEventDirectiveImport) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            Core.buxNextClientCoreModule = angular.module("BuxNextClientCore", ['ngMaterial', 'ngAnimate', 'ui.bootstrap.modal']);
            Core.buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
            Core.buxNextClientCoreModule.directive('hamburgerButton', ["$animate", function ($animate) { return new hamburgerButtonDirectiveImport.BuxNextClient.Core.Directives.hamburgerButtonDirective($animate); }]);
            Core.buxNextClientCoreModule.directive('focusTabOnLoad', ['$timeout', function ($timeout) { return new focusTabOnLoadDirectiveImport.BuxNextClient.Core.Directives.focusTabOnLoadDirective($timeout); }]);
            Core.buxNextClientCoreModule.directive('stopEvent', function () { return new stopEventDirectiveImport.BuxNextClient.Core.Directives.stopEventDirective(); });
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
