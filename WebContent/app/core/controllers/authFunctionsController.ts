/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <amd-dependency path="angular"/>

import coreModule = require("../buxNextClientCoreModule");

export module BuxNextClient.Core.Controllers {
    export class authFunctionsController {

        static $inject : string[] = ["$scope", "$timeout"];
        constructor(private $scope: coreDefinitions.IAuthFunctionsControllerScope, private $timeout: ng.ITimeoutService) {
            this.init();
        }

        private init() : void {
            this.listenToSelectedTab();
        }

        private listenToSelectedTab()
        {
            this.$scope.$on('authFunctions', (event: ng.IAngularEvent, selectedIndex: number) => {

                event.stopPropagation();

                this.$timeout(()=>this.$scope.$apply(()=>this.$scope.selectedTabIndex = selectedIndex))
            });
        }
    }


    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('authFunctionsController', authFunctionsController);
}
