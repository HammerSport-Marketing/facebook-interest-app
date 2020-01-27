
const FBLogin = document.getElementById('FBLogin');

// Local Storage
class Store {
  static getToken() {
    let tokens;
    if (localStorage.getItem('tokens') === null) {
      tokens = [];

    } else {
      tokens = JSON.parse(localStorage.getItem('tokens'));
    }

    return tokens;
  }


  static displayToken() {
    const tokens = Store.getToken();
    tokens.forEach(function (token) {
      console.log(token);
    })
  }

  static addToken(accessToken) {
    const tokens = Store.getToken();

    tokens.push(accessToken);
    console.log(tokens);
    localStorage.setItem('token', JSON.stringify(accessToken));
  }

  static removeToken() {
  }
}

class Facebook {

  async getSearchData(search, tokens) {
    const searchResponse = await fetch(`https://graph.facebook.com/search?type=adinterest&q=${search}&limit=10000&locale=en_US&access_token=${tokens}`);

    const responseData = await searchResponse.json();

    return {
      responseData
    }
  }
}




