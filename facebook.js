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
;
var FBLogin = document.querySelector('fb');
FBLogin.addEventListener('onclick', function (e) {
    checkLoginState();
    console.log(LoginState);
});
async;
getInterest(interest);
{
    // Fetch Profile
    var interestResponse = yield fetch("https://graph.facebook.com/search?type=adinterest&q=[%22business%22]&limit=10000&locale=en_US&access_token=$this.accessToken");
    // Fetch Repo
    var repoResponse = yield fetch("https://api.github.com/users/" + user + "/repos?per_page=" + this.repos_count + "&sort=" + this.repos_sort + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret);
    var interest = yield interestResponse.json();
    console.log(interest);
    var repos = yield repoResponse.json();
    return {
        profile: profile,
        repos: repos
    };
}
;
