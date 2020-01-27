var facebook = new Facebook;
// Define Search Topic From Search Bar
var searchBar = document.getElementById('searchBar');
console.log(searchBar);
//Init UI
var ui = new UI;
var searchSubmit = document.getElementById('searchSubmit');
searchBar.addEventListener('keyup', function (e) {
    var searchText = e.target.value;
    if (searchText !== '') {
        console.log(searchText);
    }
});
