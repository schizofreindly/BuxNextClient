/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../coreDefinitions.ts" />

import coreModule = require("../buxNextClientCoreModule");



export module BuxNextClient.Core.Controllers {

    export class anonController {
        static $inject:string[] = ["$scope", "$mdSidenav"];

        constructor(private $scope:coreDefinitions.IAnonControllerScope, private $mdSidenav:any) {
            this.init();
            this.$scope.toggleNavbar = (id:string):void => { this.toggleNavbar(id) };
        }

        private init(): void
        {
            this.$scope.navBarIsOpen = false;
        }

        private toggleNavbar(id:string):void {
            this.$scope.navBarIsOpen = !this.$scope.navBarIsOpen;
        }

    }

    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('anonController', anonController);
}




