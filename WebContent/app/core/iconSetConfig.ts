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
                .icon("buxNextClientCore:close", "assets/libs/material-design-icons/navigation/svg/design/ic_close_48px.svg", 24)
                .icon("buxNextClientCore:person", "assets/libs/material-design-icons/social/svg/design/ic_person_48px.svg", 48)
                .icon("buxNextClientCore:phone", "assets/libs/material-design-icons/communication/svg/design/ic_phone_48px.svg", 48)
                .icon("buxNextClientCore:email", "assets/libs/material-design-icons/communication/svg/design/ic_email_48px.svg", 48)
                .icon("buxNextClientCore:location", "assets/libs/material-design-icons/communication/svg/design/ic_location_on_48px.svg", 48)
                .icon("buxNextClientCore:event", "assets/libs/material-design-icons/action/svg/design/ic_event_48px.svg", 48)
                .icon("buxNextClientCore:lock", "assets/libs/material-design-icons/action/svg/design/ic_lock_48px.svg", 48)
                .icon("buxNextClientCore:thumbsup", "assets/img/thumbs_up.svg", 48)

            ;
        }
    }
}
