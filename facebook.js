// Local Storage
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.getToken = function () {
        var tokens;
        if (localStorage.getItem('tokens') === null) {
            tokens = [];
        }
        else {
            tokens = JSON.parse(localStorage.getItem('tokens'));
        }
        return tokens;
    };
    Store.displayToken = function () {
        var tokens = Store.getToken();
        tokens.forEach(function (token) {
            console.log(token);
        });
    };
    Store.addToken = function (accessToken) {
        var tokens = Store.getToken();
        tokens.push(accessToken);
        console.log(tokens);
        localStorage.setItem('token', JSON.stringify(accessToken));
    };
    Store.removeToken = function () {
    };
    return Store;
}());
var FBLogin = document.getElementById('FBLogin');
