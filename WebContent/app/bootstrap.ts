/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/requirejs/require.d.ts" />

requirejs.config(
    {
        baseUrl: "",
        paths: {

            /// Third party resources

            "angular" : "assets/libs/angular/angular",
            "domReady" : "assets/libs/requirejs-domready/domReady",
            "uiRouter" : "assets/libs/ui-router/release/angular-ui-router",
            "uiBootstrap" : "assets/libs/angular-bootstrap/ui-bootstrap-tpls",
            "uiUtils" : "assets/libs/angular-ui-utils/ui-utils",
            "checkListModel" : "assets/libs/checklist-model/checklist-model",
            "angular-messages": "assets/libs/angular-messages/angular-messages",
            "angular-aria": "assets/libs/angular-aria/angular-aria",
            "angular-animate": "assets/libs/angular-animate/angular-animate",
            "angular-material": "assets/libs/angular-material/angular-material",
            "hamburger-helper": "assets/libs/angular-hamburger-helper/ng-hamburger-helper",
            "core" : "app/core/index"
        },


        shim: {
            angular: {
                exports: 'angular'
            },
            'uiRouter':{
                deps: ['angular']
            },
            'uiBootstrap': {
                deps: ['angular']
            },
            'uiUtils': {
                deps: ['angular']
            },
            'checkListModel': {
                deps: ['angular']
            },
            'angular-messages': {
                deps: ['angular']
            },
            'angular-aria': {
                deps: ['angular']
            },
            'angular-animate' : {
                deps: ['angular']
            },
            'angular-material' : {
                deps: ['angular', 'angular-aria', 'angular-animate']
            },
            'hamburger-helper' : {
                deps: ['angular']
            },
            'core' : {
                deps: ['angular']
            }
        },

        urlArgs: "bust=" +  (new Date()).getTime()
    }
);

require(['angular', 'app/app', 'app/routes'],
    function (angular:ng.IAngularStatic) {
        require(['domReady!'], function(document)
        {
            angular.bootstrap(document, ["buxNextClient"]);
        });
    }
);
