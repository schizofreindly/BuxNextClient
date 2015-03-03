/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <amd-dependency path="angular-material"/>
define(["require", "exports", "./app", "angular-material"], function (require, exports, app) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var States = (function () {
            function States($stateProvider, $urlRouterProvider, $location) {
                this.$stateProvider = $stateProvider;
                this.$urlRouterProvider = $urlRouterProvider;
                this.$location = $location;
                $stateProvider.state("main", {
                    abstract: true,
                    template: '<ui-view/>'
                }).state('main.anon', {
                    url: '/anon',
                    templateUrl: 'app/core/views/anonView.html',
                    controller: 'anonController'
                }).state('main.auth', {
                    url: '/auth',
                    templateUrl: 'app/core/views/authView.html',
                    controller: 'authController'
                }).state('main.anon.register', {
                    url: '/register',
                    templateUrl: 'components/UserAuthentication/Views/SignupView.html',
                    controller: function () {
                    }
                }).state('main.anon.signin', {
                    url: '/signin',
                    onEnter: function ($state, $modal) {
                        $modal.open({
                            backdrop: false,
                            controller: 'signinController',
                            windowTemplateUrl: 'app/core/templates/modalShakeWindow.html',
                            templateUrl: 'app/core/views/signInView.html'
                        }).result.then(function (action) {
                            switch (action) {
                                case "register":
                                    {
                                        $state.go('main.anon');
                                    }
                                default: {
                                    $state.go('main.anon');
                                }
                            }
                        });
                    }
                });
                $location.html5Mode(false);
                $urlRouterProvider.when('/', function ($state) {
                    $state.go('main.anon');
                });
                $urlRouterProvider.otherwise("/");
            }
            States.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
            return States;
        })();
        BuxNextClient.States = States;
        app.BuxNextClient.buxNextClientModule.config(States);
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
