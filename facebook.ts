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


    } else if (response.status === 'not_authorized') {
      // The user hasn't authorized your application.  They
      // must click the Login button, or you must call FB.login
      // in response to a user gesture, to launch a login dialog.
    } else {
      // The user isn't logged in to Facebook. You can launch a
      // login dialog with a user gesture, but the user may have
      // to log in to Facebook before authorizing your application.
    }
  });


}
// Local Storage
class Store {
  displayToken() {
   static storeUserToken() {
    let at;
    if (localStorage.getItem('at') === null) {
      at = [];

    } else {
      at = JSON.parse(localStorage.getItem('at'));
    }
  }
  static addData(at) {
    const at = Store.storeUserToken();

    at.push(at);
  console.log(at);
    localStorage.setItem('at', JSON.stringify(at));
  }

}



const FBLogin = document.querySelector('fb');


FBLogin.addEventListener('click', (e) => {
  checkLoginState();
  console.log(LoginState);
});

class Facebook {
  async getTopic(topic) {
    const interestResponse = await fetch(`
    https://graph.facebook.com/search?type=adinterest&q=${topic}&limit=10000&locale=en_US&access_token=${accessToken}
    `);

    const interestData = await interestResponse.json();
    return {
      interestData
    }
  }
}