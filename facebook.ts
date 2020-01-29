

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
    const token = localStorage.getItem('token');
      console.log(token);
    
  }

  static addToken(accessToken) {
    const token = Store.getToken();

    token.push(accessToken);
    console.log(token);
    localStorage.setItem('token', JSON.stringify(accessToken));
  }

  static removeToken() {
  }

}
class Facebook {

  async getSearchData(search) {
    //const token = JSON.parse(localStorage.getItem('token'));
    const searchResponse = await fetch(`https://graph.facebook.com/search?type=adinterest&q=${search}&limit=10000&locale=en_US`);

    const responseData = await searchResponse[0].json();

    return {
      responseData
    }
  }
}




