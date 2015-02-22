/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
define(["require", "exports", "angular", "angular-material"], function (require, exports) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            Core.buxNextClientCoreModule = angular.module("BuxNextClientCore", ['ngMaterial']);
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
