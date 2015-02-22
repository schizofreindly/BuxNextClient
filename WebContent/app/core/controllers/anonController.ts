/// <reference path="../../../typings/angularjs/angular.d.ts" />

import coreModule = require("../buxNextClientCoreModule");

export interface IAnonScope
{
    title1: string;
    title4: string;
    isDisabled: boolean;
    googleUrl: string;
}

export module BuxNextClient.Core.Controllers {
    export class anonController {

        static $inject : string[] = ["$scope"];
        constructor(private $scope: IAnonScope) {
            $scope.title1 = 'Button223';
            $scope.title4 = 'Warn';
            $scope.isDisabled = true;
            $scope.googleUrl = 'http://google.com';
        }
    }


    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('anonController', anonController);
}
