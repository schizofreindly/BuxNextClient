import coreModule = require('../BuxNextClientCoreModule');

export module BuxNextClient.Core.Services
{
    export class AuthService
    {
        constructor()
        {

        }
    }

    coreModule.BuxNextClient.Core.BuxNextClientCoreModule.factory('AuthService', AuthService)
}
