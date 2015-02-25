/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
/// <amd-dependency path="hamburger-helper"/>


import iconSetConfigImport = require('./iconSetConfig');

export module BuxNextClient.Core {
    export var buxNextClientCoreModule:ng.IModule = angular.module("BuxNextClientCore", ['ngMaterial', 'hamburgerHelper']);

    buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
}