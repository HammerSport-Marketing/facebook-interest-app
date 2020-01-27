// Define Search Topic From Search Bar
var searchTopic = document.getElementById('searchTopic');
var searchSubmit = document.querySelector('#searchSubmit');
searchTopic.addEventListener('submit', function (e) {
    var searchText = e.target.value;
    // Search input event listener
    if (searchText !== '') {
        searchSubmit.addEventListener('click', function (e) {
            //Make httpcall
            facebook.getTopic(searchText)
                .then(function (data) {
                console.log(searchText);
            });
        });
    }
    e.preventDefault();
});
