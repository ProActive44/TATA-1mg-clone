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

let storedUserData = JSON.parse(localStorage.getItem('userData')) || [];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var f = 0
  
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
      alert("Login successful");
      window.location.href = "index.html";

      localStorage.setItem('userName', storedUserData.name);
    } 
    else if(email === storedUserData.email && password !== storedUserData.password){
      alert('Invalid credentials, Please enter correct details');
      location.href = "login.html";
    }else {
      alert('Please Create an account');
      location.href = "signup.html";
    }
});
  
