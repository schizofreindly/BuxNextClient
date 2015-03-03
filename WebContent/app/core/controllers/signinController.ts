/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="../coreDefinitions.ts" />
/// <amd-dependency path="angular"/>
/// <amd-dependency path="bootstrap-modal"/>


import coreModule = require("../buxNextClientCoreModule");

export module BuxNextClient.Core.Controllers {
    export class signinController {

        static $inject:string[] = ["$scope", "$modalInstance", "$timeout"];

        constructor(private $scope:coreDefinitions.ISignInControllerScope, private $modalInstance: ng.ui.bootstrap.IModalServiceInstance, private $timeout: ng.ITimeoutService)
        {
             this.init();
        }

        private init():void {
            this.$scope.closeModalWindow = (action: string) => { this.closeModalWindow(action); };

            this.$scope.$on('closeModalShakeWindowEvent', () => { this.closeModalWindow('closeModalShakeWindowEvent'); });

            this.$scope.preventAnimationFirstTime = 'tabpanelFirstTime';

            this.$timeout(() =>  { this.$scope.$apply(this.$scope.preventAnimationFirstTime = 'tabpanel'); }, 500);
        }

        closeModalWindow(action: string): void {
            this.$modalInstance.close(action);
        }
    }

    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('signinController', signinController);
}