// function slideshow() {
//     let slide_img = document.getElementById('slide-img');
//     let img = document.createElement('img');

//     let corousel_arr = ['https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png',
//         'https://www.1mg.com/images/login-signup/Know-Your-Medicines.png', 
//         'https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png', 
//         'https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png',
//         'https://www.1mg.com/images/login-signup/Health-Related-Queries.png'
//     ];

//     img.src = corousel_arr[0];
//     slide_img.appendChild(img);
//     let i = 1;
//     setInterval(function () {
//         img.src = corousel_arr[i % corousel_arr];
//         // img.style.width = '100%';
//         i++;
//         slide_img.append(img);
//     }, 3000);

// }
// slideshow();

let storedUserData = JSON.parse(localStorage.getItem('userData'));

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
      alert("Login successful");
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials');
    }
});
  
