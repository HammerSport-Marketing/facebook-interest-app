// Identify Variables
const searchForm = document.querySelector('#form1');
const searchDisplay = document.querySelector('#data');
const click = document.querySelector('a');
let html = ``;

// Search From Input Event Listener
searchForm.addEventListener('submit', e => {
    // Prevent Submit
    e.preventDefault();

    const searchInput = searchForm.input.value;
    const userToken = localStorage.getItem('token');
    FB.api('search?type=adinterest', {
        access_token: userToken,
        locale: 'en_US',
        type: 'adinterest',
        q: searchInput,
        limit: 100
    },
        (response) => {
            const searchResponse = response.data;
            // return {
            //     searchResponse
            // },
            searchResponse.forEach(topic => {
                html = `
            <div class="id item" id="id">ID:<br>${topic.id}</div>
            <div class="name item" id="name">Name:<br>${topic.name}</div>
            <div id="topic" class="item topic">Topic:<br>${topic.topic}</div>
            <div id="audienceSize" class="name item">Audience Size:<br>${topic.audience_size}</div>    
            `
                // console.log(topic)
                searchDisplay.innerHTML += html;
            });
        });

})

// click.addEventListener('click', e => {
//     console.log('click');
// })

