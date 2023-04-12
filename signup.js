var signupdata=JSON.parse(localStorage.getItem("credentials")) || []

function signupBtn(){

    var info={
        email : document.querySelector("#email").value,
        username : document.querySelector("#username").value,
        password : document.querySelector("#password").value,
    }

    if (info.username != "" && info.email != "" && info.password != ""  ) {
        alert("Account Created Successfully, You will be redirected to login Page!")
    }

    signupdata.push(info);

    localStorage.setItem("credentials" , JSON.stringify(signupdata))

    document.querySelector("#email").value=""
    document.querySelector("#username").value=""
    document.querySelector("#password").value=""

    window.location.href="login.html"
}