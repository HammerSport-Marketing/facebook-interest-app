var facebookInterest = new FacebookInterest;
var ui = new UI;
var searchInterest = document.getElementById('searchInterest');
searchInterest.addEventListener('keyup', function (e) {
    // Get input text
    var interestText = e.target.value;
    if (interestText !== '') {
        // Make http call
        facebookInterest.getInterest(interestText)
            .then(function (data) {
            if (data.interest.message === 'Not Found') {
                // Show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }
            else {
                // Show profile
                ui.showInterest(data.path);
                ui.showRepos(data.repos);
            }
        });
    }
    else {
        // Clear profile
        ui.clearProfile();
    }
});
