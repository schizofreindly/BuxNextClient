define(["require", "exports", '../BuxNextClientCoreModule'], function (require, exports, coreModule) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            var Services;
            (function (Services) {
                var AuthService = (function () {
                    function AuthService() {
                    }
                    return AuthService;
                })();
                Services.AuthService = AuthService;
                coreModule.BuxNextClient.Core.BuxNextClientCoreModule.factory('AuthService', AuthService);
            })(Services = Core.Services || (Core.Services = {}));
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
