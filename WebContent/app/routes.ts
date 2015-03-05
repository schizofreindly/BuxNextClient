/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <amd-dependency path="angular-material"/>


import app = require("./app")

export module BuxNextClient {

    export class States {
        static $inject : string[] = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
        constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $location: ng.ILocationProvider) {
            $stateProvider.state("main", {
                abstract: true,
                template: '<ui-view/>'
            })
            .state('main.auth', {
                url: '/auth',
                templateUrl: 'app/core/views/authView.html',
                controller: 'authController'
            })
            .state('main.anon', {
                url: '/anon',
                templateUrl: 'app/core/views/anonView.html',
                controller: 'anonController'
            })
             .state('main.anon.authFunctions', {
                 abstract: true,
                 templateUrl: 'app/core/views/authFunctionsView.html',
                 controller: 'authFunctionsController'
             })
             .state('main.anon.authFunctions.signup', {
                 url: '/signup',
                 templateUrl: 'app/core/views/signupView.html',
                 controller: 'signupController'
             })
             .state('main.anon.authFunctions.signin', {
                 url: '/signin',
                 templateUrl: 'app/core/views/signinView.html',
                 controller: 'signinController'
             })
                .state('main.anon.authFunctions.resetPassword', {
                    url: '/reset',
                    templateUrl: 'app/core/views/resetPasswordView.html',
                    controller: 'resetPasswordController'
                })

            ;

            $location.html5Mode(false);

            $urlRouterProvider.when('/', ($state : ng.ui.IStateService)=> {
                $state.go('main.anon');
            });

            $urlRouterProvider.otherwise("/");
        }
    }

    app.BuxNextClient.buxNextClientModule.config(States);
}
