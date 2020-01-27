var UI = /** @class */ (function () {
    function UI() {
        this.data = document.getElementById('data');
    }
    //Display data In Ui
    UI.prototype.showData = function (search) {
        console.log(search);
        this.data.innerHTML = "\n          <div class=\"card card-body mb-3\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <img class=\"img-fluid mb-2\" src=\"" + user.avatar_url + "\">\n                <a href=\"" + user.html_url + "\" target=\"_blank\" class=\"btn btn-primary btn-block mb-4\">View Profile</a>\n              </div>\n              <div class=\"col-md-9\">\n                <span class=\"badge badge-primary\">Public Repos: " + user.public_repos + "</span>\n                <span class=\"badge badge-secondary\">Public Gists: " + user.public_gists + "</span>\n                <span class=\"badge badge-success\">Followers: " + user.followers + "</span>\n                <span class=\"badge badge-info\">Following: " + user.following + "</span>\n                <br><br>\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Company: " + user.company + "</li>\n                  <li class=\"list-group-item\">Website/Blog: " + user.blog + "</li>\n                  <li class=\"list-group-item\">Location: " + user.location + "</li>\n                  <li class=\"list-group-item\">Member Since: " + user.created_at + "</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <h3 class=\"page-heading mb-3\">Latest Repos</h3>\n          <div id=\"repos\"></div>\n        ";
    };
    // Show Repos
    UI.prototype.showRepos = function (repos) {
        var output = '';
        repos.forEach(function (repo) {
            output += "\n      <div class=\"card card-body mb-2\">\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <a href=\"" + repo.html_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + repo.name + "</a>\n          </div>\n          <div class=\"col-md-9\">\n                <span class=\"badge badge-primary\">Stars: " + repo.stargazers_count + "</span>\n                <span class=\"badge badge-secondary\">Watchers: " + repo.watchers_count + "</span>\n                <span class=\"badge badge-success\">Forks: " + repo.forks_count + "</span>\n                </div>\n      </div>\n  </div>\n      ";
        });
        // Output Repos
        document.getElementById('repos').innerHTML = output;
    };
    //Show Alert Message
    UI.prototype.showAlert = function (message, className) {
        var _this = this;
        // Clear Remaining Alerts
        this.clearAlert();
        //Create Div
        var div = document.createElement('div');
        // Add Classes
        div.className = className;
        // Add test
        div.appendChild(document.createTextNode(message));
        //Get Parent
        var container = document.querySelector('.searchContainer');
        // Get Search Box
        var search = document.querySelector('.search');
        //Insert Alert
        container.insertBefore(div, search);
        //Timeout after 3 seconds
        setTimeout(function () {
            _this.clearAlert();
        }, 3000);
    };
    // Clear Alert Message
    UI.prototype.clearAlert = function () {
        var currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    };
    //Clear Profile
    UI.prototype.clearProfile = function () {
        this.showProfile.innerHTML = '';
    };
    return UI;
}());
