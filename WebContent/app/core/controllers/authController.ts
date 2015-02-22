/// <reference path="../../../typings/angularjs/angular.d.ts" />

import coreModule = require("../buxNextClientCoreModule");

export module BuxNextClient.Core.Controllers {
    export class authController {

        static $inject : string[] = ["$scope"];
        constructor(private $scope: ng.IScope) {}
    }


    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('authController', authController);
}
