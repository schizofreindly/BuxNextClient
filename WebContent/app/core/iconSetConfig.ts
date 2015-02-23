/// <reference path="../../typings/angularjs/angular.d.ts" />

export module BuxNextClient.Core
{
    export class iconSetConfig
    {
        static $inject = "$mdIconProvider";

        constructor(private $mdIconProvider: any)
        {
            this.init();
        }

        init() :  void {
            this.$mdIconProvider
                .icon("buxNextClientCore: vpnKey", "assets/libs/material-design-icons/communication/2x_web/ic_vpn_key_white_24dp.png", 24);
        }
    }
}