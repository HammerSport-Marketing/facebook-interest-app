var facebook = new Facebook;
// Define Search Topic From Search Bar
var searchBar = document.getElementById('searchBar');
//Init UI
var ui = new UI;
var searchSubmit = document.querySelector('#searchSubmit');
searchBar.addEventListener('keyup', function (e) {
    var searchText = e.target.value;
    // Search input event listener
    console.log(searchText);
    if (searchText !== '') {
        console.log(searchText);
        searchSubmit.addEventListener('click', function (e) {
            //Make httpcall
            facebook.getTopic(searchText)
                .then(function (data) {
                if (data === 'Not Found') {
                    alert('error');
                }
                else {
                    //show data
                    ui.showData();
                }
            });
        });
    }
});
