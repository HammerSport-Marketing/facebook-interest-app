const facebook = new Facebook;

// Define Search Topic From Search Bar
const searchTopic = document.getElementById('searchTopic')

//Init UI
const ui = new UI;

const searchSubmit = document.querySelector('#searchSubmit')   

searchTopic.addEventListener('submit', (e) => {
    const searchText = e.target.value;
    // Search input event listener

    if(searchText !== ''){
        console.log(searchText);
        searchSubmit.addEventListener('click', (e) => {
            //Make httpcall
            facebook.getTopic(searchText)
            .then(data => {
                if(data === 'Not Found') {
                    alert('error');
                } else {
                    //show data
                    ui.showData();
                }
            })
        });
    }
});

