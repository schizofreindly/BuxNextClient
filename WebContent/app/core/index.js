/// <amd-dependency path="app/core/controllers/anonController"/>
/// <amd-dependency path="app/core/controllers/authController"/>
define(["require", "exports", "app/core/controllers/anonController", "app/core/controllers/authController"], function (require, exports) {
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
