/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
define(["require", "exports", './iconSetConfig', "angular", "angular-material"], function (require, exports, iconSetConfigImport) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            Core.buxNextClientCoreModule = angular.module("BuxNextClientCore", ['ngMaterial']);
            Core.buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
