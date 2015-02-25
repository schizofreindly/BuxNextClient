/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
define(["require", "exports", './iconSetConfig', './directives/hamburgerButton/hamburgerButtonDirective', "angular", "angular-material"], function (require, exports, iconSetConfigImport, hamburgerButtonDirectiveImport) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            Core.buxNextClientCoreModule = angular.module("BuxNextClientCore", ['ngMaterial']);
            Core.buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
            Core.buxNextClientCoreModule.directive('hamburgerButton', ["$animate", function ($animate) { return new hamburgerButtonDirectiveImport.BuxNextClient.Core.Directives.hamburgerButtonDirective($animate); }]);
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
