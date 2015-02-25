/// <reference path="../../../../typings/angularjs/angular.d.ts" />

export module BuxNextClient.Core.Directives
{
    export interface hamburgerButtonDirectiveScope extends ng.IScope
    {
        isOpen : boolean;
    }

    export class hamburgerButtonDirective implements ng.IDirective
    {
        constructor(private $animate: ng.IAnimateService)
        {

        }

        restrict: string = "E";

        templateUrl: string = "app/core/directives/hamburgerButton/hamburgerButtonTemplate.html";

        replace: boolean = true;

        scope: any = {
            isOpen: '@'
        }

        link:ng.IDirectiveLinkFn = (scope: hamburgerButtonDirectiveScope,
                                     instanceElement: ng.IAugmentedJQuery,
                                     instanceAttributes: ng.IAttributes) => {

        }
    }

    export class hamburgerButtonDirectiveAnimation
    {
        constructor() {}

        addClass(): void  {
            alert('add Class');
        }

        removeClass(): void  {
            alert('remove Class');
        }
    }


}