/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>

import iconSetConfigImport = require('./iconSetConfig');

import hamburgerButtonDirectiveImport = require('./directives/hamburgerButton/hamburgerButtonDirective');

export module BuxNextClient.Core {
    export var buxNextClientCoreModule:ng.IModule = angular.module("BuxNextClientCore", ['ngMaterial']);

    buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);

    buxNextClientCoreModule
        .directive('hamburgerButton',["$animate", ($animate : ng.IAnimateService) => new hamburgerButtonDirectiveImport
            .BuxNextClient.Core.Directives.hamburgerButtonDirective($animate)]);
}