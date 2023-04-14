let userName = localStorage.getItem('userName');

if(userName === null){
    document.getElementById("login_button").addEventListener("click", function() {
        // Redirect to login.html when login button is clicked
        window.location.href = "login.html";
    });

    document.getElementById("signup_button").addEventListener("click", function() {
        // Redirect to signup.html when signup button is clicked
        window.location.href = "signup.html";
    });
}
else{
    // Update the login button text with user name
    document.getElementById("login_button").innerHTML = `Welcome, ${userName}`;
    // Disable the login button link
    document.getElementById("login_button").href = "#";
    // Hide the vertical line between the login and signup buttons
    document.getElementById("login_button").nextSibling.textContent = "";
    // Update the signup button text with user name
    document.getElementById("signup_button").textContent = "";
}
