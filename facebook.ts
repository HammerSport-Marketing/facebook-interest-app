
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

      // Add to LS
      Store.addToken(accessToken);
    } else if (response.status === 'not_authorized') {
      // The user hasn't authorized your application.  They
      // must click the Login button, or you must call FB.login
      // in response to a user gesture, to launch a login dialog.
    } else {
      // The user isn't logged in to Facebook. You can launch a
      // login dialog with a user gesture, but the user may have
      // to log in to Facebook before authorizing your application.
    }
  })
}

const FBLogin = document.getElementById('FBLogin');

// Local Storage
class Store {
  static getToken() {
    let token;
    if (localStorage.getItem('token') === null) {
      token = [];

    } else {
      token = JSON.parse(localStorage.getItem('token'));
    }

    return token;
  }


  static displayToken() {
    const tokens = Store.getToken();
    tokens.forEach(function (token) {
      console.log(token);
    })
  }

  static addToken(accessToken) {
    const token = Store.getToken();

    token.push(accessToken);
    console.log(token);
    localStorage.setItem('token', JSON.stringify(accessToken));
  }

  static removeToken() {
  }

  
  class Facebook {

  async getSearchData(search, token) {
    const searchResponse = await fetch(`https://graph.facebook.com/search?type=adinterest&q=${search}&limit=10000&locale=en_US&access_token=${token}`);

    const responseData = await searchResponse.json();

    return {
      responseData
    }
  }
}
  



