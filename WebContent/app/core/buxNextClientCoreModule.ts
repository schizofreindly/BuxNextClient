/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>

import iconSetConfigImport = require('./iconSetConfig');

export module BuxNextClient.Core {
    export var buxNextClientCoreModule:ng.IModule = angular.module("BuxNextClientCore", ['ngMaterial']);

    buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);
}