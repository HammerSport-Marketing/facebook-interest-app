//Init Facebook
const facebook = new Facebook;

const searchBar = document.querySelector('.form-control');


// Define Search Topic From Search Bar


console.log(searchBar);
//Init UI
const ui = new UI;

const store = new Store;

const searchSubmit = document.getElementById('searchSubmit')   

searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value;

    if(searchText !== ''){
        console.log(searchText);
        //Make Http call
       facebook.getSearchData(searchText)
       .then(data => {
           // Show Data
           var data = JSON.parse(data);
           var interestId = data.id;
           console.log(interestId);
           ui.showData(data.responseData.data);
       })
    }
});

