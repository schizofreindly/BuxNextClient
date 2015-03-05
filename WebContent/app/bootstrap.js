/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/requirejs/require.d.ts" />
requirejs.config({
    baseUrl: "",
    paths: {
        /// Third party resources
        "angular": "assets/libs/angular/angular",
        "domReady": "assets/libs/requirejs-domready/domReady",
        "uiRouter": "assets/libs/ui-router/release/angular-ui-router",
        "uiBootstrap": "assets/libs/angular-bootstrap/ui-bootstrap-tpls",
        "uiUtils": "assets/libs/angular-ui-utils/ui-utils",
        "checkListModel": "assets/libs/checklist-model/checklist-model",
        "angular-messages": "assets/libs/angular-messages/angular-messages",
        "angular-aria": "assets/libs/angular-aria/angular-aria",
        "angular-animate": "assets/libs/angular-animate/angular-animate",
        "angular-material": "assets/libs/angular-material/angular-material",
        "bootstrap-transition": "assets/libs/bootstrap-ui/src/transition/transition",
        "bootstrap-modal": "assets/libs/bootstrap-ui/src/modal/modal",
        "angular-translate": "assets/libs/angular-translate/angular-translate",
        "angular-translate-loader-static-files": "assets/libs/angular-translate-loader-static-files/angular-translate-loader-static-files",
        "core": "app/core/index"
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'uiRouter': {
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
        'angular-animate': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular', 'angular-aria', 'angular-animate']
        },
        'bootstrap-transition': {
            deps: ['angular']
        },
        'bootstrap-modal': {
            deps: ['angular', 'bootstrap-transition']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'angular-translate-loader-static-files': {
            deps: ['angular', 'angular-translate']
        },
        'core': {
            deps: ['angular']
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});
require(['angular', 'app/app', 'app/routes'], function (angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ["buxNextClient"]);
    });
});
