const facebookInterest = new FacebookInterest;

const ui = new UI;

const searchInterest = document.getElementById('searchInterest');

searchInterest.addEventListener('keyup', (e) => {
    // Get input text
    const interestText = e.target.value;
  
    if(interestText !== ''){
     // Make http call
     facebookInterest.getInterest(interestText)
      .then(data => {
        if(data.interest.message === 'Not Found') {
          // Show alert
          ui.showAlert('User Not Found', 'alert alert-danger')
        } else {
          // Show profile
          ui.showInterest(data.path);
          ui.showRepos(data.repos);
        }
      })
    } else {
      // Clear profile
      ui.clearProfile();
    }
  }); 