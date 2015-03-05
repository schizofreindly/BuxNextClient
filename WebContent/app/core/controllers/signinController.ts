/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../coreDefinitions.ts" />
/// <amd-dependency path="angular"/>


import coreModule = require("../buxNextClientCoreModule");

export module BuxNextClient.Core.Controllers {
    export class signinController {

        static $inject:string[] = ["$scope"];

        constructor(private $scope:coreDefinitions.ISignInControllerScope)
        {
             this.init();
        }

        private init():void {
            this.$scope.$emit('authFunctions', 0)
        }

    }

    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('signinController', signinController);
}