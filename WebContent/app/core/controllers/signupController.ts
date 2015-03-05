/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../coreDefinitions.ts" />
/// <amd-dependency path="angular"/>


import coreModule = require("../buxNextClientCoreModule");

export module BuxNextClient.Core.Controllers {
    export class signupController {

        static $inject:string[] = ["$scope", "$http"];
        constructor(private $scope : coreDefinitions.ISignUpControllerScope, private $http : ng.IHttpService)
        {
            this.init();
        }

        private init() : void
        {
            this.$scope.$emit('authFunctions', 2)
            this.loadCountries();
        }

        private loadCountries()
        {
            this.$http.get('app/core/resources/countries_en.json').
                success(function(data, status, headers, config) {
                    alert(data);
                }).
                error(function(data, status, headers, config) {
                    console.log('Error loading countries', status)
                });
        }

        signUp() : void {

        }
    }

    coreModule.BuxNextClient.Core.buxNextClientCoreModule.controller('signupController', signupController);
}

