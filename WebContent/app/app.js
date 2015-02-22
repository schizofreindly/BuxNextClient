/// <reference path="../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="uiRouter"/>
/// <amd-dependency path="uiBootstrap"/>
/// <amd-dependency path="uiUtils"/>
/// <amd-dependency path="checkListModel"/>
/// <amd-dependency path="angular-messages"/>
/// <amd-dependency path="core"/>
define(["require", "exports", "angular", "uiRouter", "uiBootstrap", "uiUtils", "checkListModel", "angular-messages", "core"], function (require, exports) {
    var BuxNextClient;
    (function (BuxNextClient) {
        BuxNextClient.buxNextClientModule = angular.module("buxNextClient", ['ui.router', 'ui.bootstrap', 'ui.utils', 'checklist-model', 'ngMessages', 'BuxNextClientCore']);
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
