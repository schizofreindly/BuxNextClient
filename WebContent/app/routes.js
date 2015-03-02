/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
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
                    onEnter: function ($state, $mdDialog) {
                        $mdDialog.show({
                            template: '<md-dialog>' + '  <md-content>Hello {{ employee }}!</md-content>' + '  <div class="md-actions">' + '    <md-button ng-click="closeDialog()">' + '      Close Greeting' + '    </md-button>' + '  </div>' + '</md-dialog>',
                            controller: function ($scope, $mdDialog) {
                                $scope.closeDialog = function () {
                                    $mdDialog.hide(true);
                                };
                            },
                            onComplete: function () {
                            }
                        }).finally(function () {
                            $state.go('main.anon');
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
