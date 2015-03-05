/// <reference path="../../typings/angularjs/angular.d.ts" />

declare module coreDefinitions {
    interface IAnonControllerScope extends ng.IScope {
        toggleNavbar(id:string) : void;
        navBarIsOpen : boolean;

    }

    export interface ISignInControllerScope extends ng.IScope {
        closeModalWindow(action: string):void;
        preventAnimationFirstTime: string;
    }

    export interface ICountry
    {
        name: string;
        code : string;
    }

    export interface IHamburgerButtonDirectiveScope extends ng.IScope
    {
        isOpen() : boolean;
    }

    export interface IAuthFunctionsControllerScope extends ng.IScope
    {
        selectedTabIndex : number;
    }

    export interface ISignUpControllerScope extends IAuthFunctionsControllerScope
    {
        signUp() : void;
        countriesList: Array<ICountry>;
    }

    export interface IForgotPasswordControllerScope extends ng.IScope
    {

    }
}