import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

// footer part
import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

// connect to product page
function goToProducts() {
  window.location.href = "product.html";
}
// Retrieve the button element
const quickOrderButton = document.querySelector(".quick-order");

// Attach onclick event handler
quickOrderButton.onclick = goToProducts;

let i1 = document.getElementById("muliple_img1").src;
let i2 = document.getElementById("muliple_img2").src;
let i3 = document.getElementById("muliple_img3").src;
let i4 = document.getElementById("muliple_img4").src;

document.getElementById("muliple_img1").addEventListener("click", () => {
  var img1 = document.getElementById("main_img_1");
  img1.src = i1;
  // img1.style.height = "560px";
  // img1.style.width = "420px";
});
document.getElementById("muliple_img2").addEventListener("click", () => {
  document.getElementById("main_img_1").src = i2;
});
document.getElementById("muliple_img3").addEventListener("click", () => {
  document.getElementById("main_img_1").src = i3;
});
document.getElementById("muliple_img4").addEventListener("click", () => {
  document.getElementById("main_img_1").src = i4;
});

// --------------------------------------------

let obj = JSON.parse(localStorage.getItem("Productdescription"));

let image = document.getElementById("main_img_1");
image.src = obj.img;

let title = document.querySelector("#name h2");
title.textContent = obj.title;

let brand = document.querySelector("#brand p");
brand.textContent = obj.type;

let rating = document.querySelector("#rating");
rating.textContent = obj.rating;

let price = document.getElementById("price");
price.textContent = obj.price;

let originalprice = document.getElementById("originalprice");
originalprice.textContent = obj.oldMRP;

let discount = document.getElementById("discount");
discount.textContent = obj.discount;

document.getElementById("btn").addEventListener("click", function () {
  addtoCart(obj);
});

// Add to cart --------------------
let cartdata = JSON.parse(localStorage.getItem("data")) || [];
function addtoCart(ele) {
  let pro = {
    name: ele.title,
    quantity: 1,
    mrp: ele.oldMRP,
    price: ele.price,
  };
  cartdata.push(pro);
  localStorage.setItem("data", JSON.stringify(cartdata));
  alert(`${ele.type} Item Added to cart`);
}
