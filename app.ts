const facebook = new Facebook;

// Define Search Topic From Search Bar
const searchBar = document.getElementById('searchBar')

console.log(searchBar);
//Init UI
const ui = new UI;

const searchSubmit = document.getElementById('searchSubmit')   

searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value;

    if(searchText !== ''){
        console.log(searchText);
    }
});

