function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            // The user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token 
            // and signed request each expire.
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
        }
        else if (response.status === 'not_authorized') {
            // The user hasn't authorized your application.  They
            // must click the Login button, or you must call FB.login
            // in response to a user gesture, to launch a login dialog.
        }
        else {
            // The user isn't logged in to Facebook. You can launch a
            // login dialog with a user gesture, but the user may have
            // to log in to Facebook before authorizing your application.
        }
    });
}
// Local Storage
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.displayToken = function () {
    };
    Store.storeUserToken = function () {
        var at;
        if (localStorage.getItem('at') === null) {
            at = [];
        }
        else {
            at = JSON.parse(localStorage.getItem('at'));
        }
    };
    Store.addData = function (at) {
        var at = Store.storeUserToken();
        at.push(at);
        console.log(at);
        localStorage.setItem('at', JSON.stringify(at));
    };
    return Store;
}());
var FBLogin = document.querySelector('fb');
FBLogin.addEventListener('click', function (e) {
    checkLoginState();
    console.log(LoginState);
});
var Facebook = /** @class */ (function () {
    function Facebook() {
    }
    Facebook.prototype.getTopic = function (topic) {
        return __awaiter(this, void 0, void 0, function () {
            var interestResponse, interestData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("\n    https://graph.facebook.com/search?type=adinterest&q=" + topic + "&limit=10000&locale=en_US&access_token=" + accessToken + "\n    ")];
                    case 1:
                        interestResponse = _a.sent();
                        return [4 /*yield*/, interestResponse.json()];
                    case 2:
                        interestData = _a.sent();
                        return [2 /*return*/, {
                                interestData: interestData
                            }];
                }
            });
        });
    };
    return Facebook;
}());
