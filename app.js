var facebook = new Facebook;
// Define Search Topic From Search Bar
var searchTopic = document.getElementById('searchTopic');
//Init UI
var ui = new UI;
var searchSubmit = document.querySelector('#searchSubmit');
searchTopic.addEventListener('submit', function (e) {
    var searchText = e.target.value;
    // Search input event listener
    if (searchText !== '') {
        console.log(searchText);
        searchSubmit.addEventListener('', function (e) {
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
