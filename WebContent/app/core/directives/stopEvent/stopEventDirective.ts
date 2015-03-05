/// <reference path="../../../../typings/angularjs/angular.d.ts" />

export module BuxNextClient.Core.Directives {
export class stopEventDirective {

    constructor() {}

     restrict:string = 'A';

    link: ng.IDirectiveLinkFn = (scope, element, attr) => {
        element.bind('click', function (e) {
            e.stopPropagation();
        });
    }
}}


