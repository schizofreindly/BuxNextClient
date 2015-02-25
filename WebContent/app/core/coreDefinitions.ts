/// <reference path="../../typings/angularjs/angular.d.ts" />

declare module coreDefinitions
{
    interface IAnonControllerScope extends ng.IScope
    {
        toggleNavbar(id: string) : void;
        navBarIsOpen : boolean;

    }
}