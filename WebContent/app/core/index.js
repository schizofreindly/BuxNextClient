/// <amd-dependency path="app/core/controllers/anonController"/>
/// <amd-dependency path="app/core/controllers/authController"/>
/// <amd-dependency path="app/core/controllers/signinController"/>
/// <amd-dependency path="app/core/controllers/signupController"/>
/// <amd-dependency path="app/core/controllers/authFunctionsController"/>
/// <amd-dependency path="app/core/controllers/resetPasswordController"/>
define(["require", "exports", "app/core/controllers/anonController", "app/core/controllers/authController", "app/core/controllers/signinController", "app/core/controllers/signupController", "app/core/controllers/authFunctionsController", "app/core/controllers/resetPasswordController"], function (require, exports) {
    var BuxNextClient;
    (function (BuxNextClient) {
        var Core;
        (function (Core) {
            var Index = (function () {
                function Index() {
                }
                return Index;
            })();
            Core.Index = Index;
        })(Core = BuxNextClient.Core || (BuxNextClient.Core = {}));
    })(BuxNextClient = exports.BuxNextClient || (exports.BuxNextClient = {}));
});
