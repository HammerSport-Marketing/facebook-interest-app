var searchBar = document.querySelector('.form-control');
// Define Search Topic From Search Bar
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
