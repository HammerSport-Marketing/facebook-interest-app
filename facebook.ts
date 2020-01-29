

// Local Storage

class Facebook {

  async getSearchData(search) {
    const token = JSON.parse(localStorage.getItem('token'));
    const searchResponse = await fetch(`https://graph.facebook.com/search?type=adinterest&q=${search}&limit=10000&locale=en_US&access_token=${token}`);

    const responseData = await searchResponse[0].json();

    return {
      responseData
    }
  }
}




