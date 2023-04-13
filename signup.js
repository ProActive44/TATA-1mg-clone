let sliderIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > slides.length) {
    sliderIndex = 1;
  }
  slides[sliderIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();

document.getElementById('signup-form').addEventListener('submit', signupBtn);
  function signupBtn(){
    event.preventDefault();
    
    const userData = {
        email: document.getElementById('email').value,
        name: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    if (userData.email != "" && userData.name != "" && userData.password != "") {
        alert("Account Created Successfully, You will be redirected to login Page!")
    }
    else{
        alert("Please fill all credentials");
    }
    
    localStorage.setItem('userData', JSON.stringify(userData));

    document.querySelector("#email").value=""
    document.querySelector("#username").value=""
    document.querySelector("#password").value=""

    window.location.href = 'login.html';
  };