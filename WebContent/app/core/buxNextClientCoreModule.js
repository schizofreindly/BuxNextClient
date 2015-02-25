/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
/// <amd-dependency path="hamburger-helper"/>
define(["require", "exports", './iconSetConfig', "angular", "angular-material", "hamburger-helper"], function (require, exports, iconSetConfigImport) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            Core.buxNextClientCoreModule = angular.module("BuxNextClientCore", ['ngMaterial', 'hamburgerHelper']);
            Core.buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
