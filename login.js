function slideshowBestSellers() {
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');

    let best_sellers_arr = ['https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png',
        'https://www.1mg.com/images/login-signup/Know-Your-Medicines.png', 
        'https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png', 
        'https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png',
        'https://www.1mg.com/images/login-signup/Health-Related-Queries.png'
    ];

    img.src = best_sellers_arr[0];
    slide_img.appendChild(img);
    let i = 1;
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        // img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 3000);

}
slideshowBestSellers();


var credentialsdata = JSON.parse(localStorage.getItem("credentials")) || []

function loginBtn(){
    var f = 0;

    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value

    credentialsData.forEach(function(elem){
        if (email == elem.email && password == elem.password) {
            alert("login successfull");
            window.location.assign("index.html");
            f = 1
            localStorage.setItem("username", ele.firstname);
        }
        else{
            alert("Invalid Email and Password");
        }
    })
}
