/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../coreDefinitions.ts" />

import coreModule = require("../buxNextClientCoreModule");


export module BuxNextClient.Core.Controllers {
    export class signinController {
        static $inject:string[] = ["$scope", "$mdDialog"];

        constructor(private $scope:ng.IScope, private $mdDialog:any) {
            debugger;
            this.init();
        }

        private init():void {
            alert('test');
        }
    }

    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('signinController', signinController);
}