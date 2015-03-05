/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular-material"/>
/// <amd-dependency path="bootstrap-modal"/>

import iconSetConfigImport = require('./iconSetConfig');

import hamburgerButtonDirectiveImport = require('./directives/hamburgerButton/hamburgerButtonDirective');

import focusTabOnLoadDirectiveImport = require('./directives/focusTabOnLoad/focusTabOnLoadDirective');

import stopEventDirectiveImport = require('./directives/stopEvent/stopEventDirective');

export module BuxNextClient.Core {
    export var buxNextClientCoreModule:ng.IModule = angular.module("BuxNextClientCore", ['ngMaterial', 'ngAnimate', 'ui.bootstrap.modal']);

    buxNextClientCoreModule.config(iconSetConfigImport.BuxNextClient.Core.iconSetConfig);

    buxNextClientCoreModule
        .directive('hamburgerButton',["$animate", ($animate : ng.IAnimateService) => new hamburgerButtonDirectiveImport
            .BuxNextClient.Core.Directives.hamburgerButtonDirective($animate)]);

    buxNextClientCoreModule
        .directive('focusTabOnLoad',['$timeout', ($timeout) => new focusTabOnLoadDirectiveImport.BuxNextClient.Core.Directives.focusTabOnLoadDirective($timeout)]);

    buxNextClientCoreModule
        .directive('stopEvent',() => new stopEventDirectiveImport.BuxNextClient.Core.Directives.stopEventDirective());

}