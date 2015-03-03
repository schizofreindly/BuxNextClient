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
            }).state('main.anon', {
                url: '/anon',
                templateUrl: 'app/core/views/anonView.html',
                controller: 'anonController'
            })
            .state('main.auth', {
                url: '/auth',
                templateUrl: 'app/core/views/authView.html',
                controller: 'authController'
             })
             .state('main.anon.register', {
                url: '/register',
                templateUrl: 'components/UserAuthentication/Views/SignupView.html',
                controller: function() {}
             })
             .state('main.anon.signin', {
                    url: '/signin',
                    onEnter: function($state: ng.ui.IStateService, $modal: ng.ui.bootstrap.IModalService) {
                        $modal.open(
                            {
                                backdrop: false,
                                controller: 'signinController',
                                windowTemplateUrl: 'app/core/templates/modalShakeWindow.html',
                                templateUrl: 'app/core/views/signInView.html'
                            }).result.then((action: string) => {
                                switch(action)
                                {
                                    case "register":
                                    {
                                        $state.go('main.anon');
                                    }
                                    default: {
                                        $state.go('main.anon');
                                    }
                                }
                            });
                    }}
             );

            $location.html5Mode(false);

            $urlRouterProvider.when('/', ($state : ng.ui.IStateService)=> {
                $state.go('main.anon');
            });

            $urlRouterProvider.otherwise("/");
        }
    }

    app.BuxNextClient.buxNextClientModule.config(States);
}
