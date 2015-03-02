/// <reference path="../../typings/angularjs/angular.d.ts" />

export module BuxNextClient.Core
{
    export class iconSetConfig
    {
        static $inject : string[] = ["$mdIconProvider"];

        constructor($mdIconProvider: any)
        {
            $mdIconProvider
                .icon("buxNextClientCore:vpnKey", "assets/libs/material-design-icons/action/svg/design/ic_account_circle_24px.svg", 24)
                .icon("buxNextClientCore:search", "assets/libs/material-design-icons/action/svg/design/ic_search_24px.svg", 24)
                .icon("buxNextClientCore:login", "assets/img/log-in-512px.svg", 24)
                .icon("buxNextClientCore:slideshow", "assets/libs/material-design-icons/image/svg/design/ic_slideshow_24px.svg", 24)

            ;
        }
    }
}