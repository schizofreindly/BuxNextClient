/// <reference path="../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="uiRouter"/>
/// <amd-dependency path="uiBootstrap"/>
/// <amd-dependency path="uiUtils"/>
/// <amd-dependency path="checkListModel"/>
/// <amd-dependency path="angular-messages"/>
/// <amd-dependency path="core"/>

export module BuxNextClient {
    export var buxNextClientModule:ng.IModule = angular.module("buxNextClient", ['ui.router', 'ui.bootstrap', 'ui.utils', 'checklist-model', 'ngMessages', 'BuxNextClientCore']);
}


