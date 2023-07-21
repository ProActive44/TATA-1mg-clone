import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

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

// console.log(API_URL);
// const apiUrl = process.env.API_URL; 
// console.log(apiUrl)

let page = 1;
let currData = []; // For sorting and filtering work simultaneously.

let container = document.getElementById("products");
let displaydata = (data) => {
  container.textContent = "";

  data.map((ele, idx) => {
    let div = document.createElement("div");
    div.classList = "products-Container-card";
    if (idx === 0) {
      div.classList = "first products-Container-card";
    }
    //   div.addEventListener("click", )

    let img = document.createElement("img");
    img.src = ele.image;
    img.alt = ele.title;
    img.addEventListener("click", () => {
      let obj = {
        img: ele.image,
        type: ele.type,
        rating: ele.rating,
        title: ele.title,
        desc: ele.description,
        price: ele.price,
        oldMRP: ele.oldMRP,
        discount: ele.discount,
      };
      localStorage.setItem("Productdescription", JSON.stringify(obj));
      window.location.href = "productdescp.html";
    });

    let h3 = document.createElement("h3");
    h3.textContent = ele.title;

    let desc = document.createElement("p");
    desc.textContent = ele.description;

    let oldPriceDiv = document.createElement("div");
    oldPriceDiv.classList = "oldPriceDiv";

    let oldMRP = document.createElement("p");
    oldMRP.innerHTML = `MRP ₹<s>${ele.oldMRP}</s>`;

    let discount = document.createElement("p");
    discount.classList = "discount";
    discount.textContent = ele.discount;

    oldPriceDiv.append(oldMRP, discount);

    let MRP = document.createElement("p");
    MRP.classList = "price";
    MRP.innerHTML = `₹<span>${ele.price}</span>`;

    let addCART = document.createElement("btn");
    addCART.textContent = "Add To Cart";
    addCART.classList = "addToCart";
    addCART.addEventListener("click", function () {
      addtoCart(ele);
    });

    div.append(img, h3, desc, oldPriceDiv, MRP, addCART);

    container.append(div);
  });
};

let getdata = async (url) => {
  let div = document.createElement("div");
  let loading = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Loading...";
  loading.append(h3);

  div.append(loading);
  div.style.height = "300px";
  container.append(div);

  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
    // displaydata(data)
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Products array with AllProduct Array
let Popular_Combo_Deals = await getdata(
  `${API_URL}/Popular_Combo_Deals?_page=${page}&_limit=9`
);
let Calcium_supplement = await getdata(
  `${API_URL}/Calcium_supplement?_page=${page}&_limit=9`
);
let Spotlight = await getdata(
  `${API_URL}/Spotlight?_page=${page}&_limit=9`
);
let Treading = await getdata(
  `${API_URL}/Treading?_page=${page}&_limit=9`
);
let Breakfast = await getdata(
  `${API_URL}/Breakfast?_page=${page}&_limit=9`
);
let Bodymassagers = await getdata(
  `${API_URL}/Bodymassagers?_page=${page}&_limit=9`
);
let FootHealth = await getdata(
  `${API_URL}/FootHealth?_page=${page}&_limit=9`
);

let AllProducts = await getdata(
  `${API_URL}/ALLProducts?_page=${page}&_limit=9`
);

displaydata(AllProducts);

// -------------------  Filtering  ------------------

let Popular_Combo_Deal_Filter = document.querySelector("#Popular_Combo_Deals");
let Calcium_supplement_Filter = document.querySelector("#Calcium_supplement");
let Spotlight_Filter = document.querySelector("#Spotlight");
let Treading_Filter = document.querySelector("#Treading");
let Breakfast_Filter = document.querySelector("#Breakfast");
let Bodymassagers_Filter = document.querySelector("#Bodymassagers");
let FootHealth_Filter = document.querySelector("#FootHealth");
let AllProducts_Filter = document.querySelector("#All-Products");

Popular_Combo_Deal_Filter.addEventListener("change", filtereddata);
Calcium_supplement_Filter.addEventListener("change", filtereddata);
Spotlight_Filter.addEventListener("change", filtereddata);
Treading_Filter.addEventListener("change", filtereddata);
Breakfast_Filter.addEventListener("change", filtereddata);
Bodymassagers_Filter.addEventListener("change", filtereddata);
FootHealth_Filter.addEventListener("change", filtereddata);
AllProducts_Filter.addEventListener("change", () => {
  Popular_Combo_Deal_Filter.checked = false;
  Calcium_supplement_Filter.checked = false;
  Spotlight_Filter.checked = false;
  Treading_Filter.checked = false;
  Breakfast_Filter.checked = false;
  Bodymassagers_Filter.checked = false;
  FootHealth_Filter.checked = false;
  let mainarr = [];
  const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
  mainarr.splice(randomIndex, 0, ...AllProducts);
  displaydata(mainarr);
});

function filtereddata() {
  let mainarr = [];
  if (Popular_Combo_Deal_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Popular_Combo_Deals);
  }
  if (Calcium_supplement_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Calcium_supplement);
  }
  if (Spotlight_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Spotlight);
  }
  if (Treading_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Treading);
  }
  if (Breakfast_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Breakfast);
  }
  if (Bodymassagers_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...Bodymassagers);
  }
  if (FootHealth_Filter.checked) {
    AllProducts_Filter.checked = false;
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...FootHealth);
  }

  if (
    !AllProducts_Filter.checked &&
    !FootHealth_Filter.checked &&
    !Bodymassagers_Filter.checked &&
    !Treading_Filter.checked &&
    !Spotlight_Filter.checked &&
    !Calcium_supplement_Filter.checked &&
    !Popular_Combo_Deal_Filter.checked
  ) {
    const randomIndex = Math.floor(Math.random() * (mainarr.length + 1));
    mainarr.splice(randomIndex, 0, ...AllProducts);
  }
  displaydata(mainarr);
  //    console.log(mainarr)
}

// Discount


// Sorting

let lowToHigh = document.getElementById("lowToHigh");
let highToLow = document.getElementById("highToLow");

lowToHigh.addEventListener("change", async () => {
  if (lowToHigh.checked == false && highToLow.checked == false) {
    let data = await fetch(
      `${API_URL}/ALLProducts?_page=1&_limit=9`
    );
    data = await data.json();
    displaydata(data);
    return;
  }

  highToLow.checked = false;
  let data = await fetch(
    `${API_URL}/ALLProducts?_sort=price&_order=asc&_page=1&_limit=9`
  );
  data = await data.json();
  // console.log("this is sorted - " + data)
  displaydata(data);
});

highToLow.addEventListener("change", async () => {
  if (lowToHigh.checked == false && highToLow.checked == false) {
    let data = await fetch(
      `${API_URL}/ALLProducts?_page=1&_limit=9`
    );
    data = await data.json();
    displaydata(data);
    return;
  }

  lowToHigh.checked = false;
  let data = await fetch(
    `${API_URL}/ALLProducts?_sort=price&_order=desc&_page=1&_limit=9`
  );
  data = await data.json();
  // console.log("this is sorted - " + data)
  displaydata(data);
});
// morethan10.addEventListener("change")
// morethan20.addEventListener("change")
// morethan30.addEventListener("change", )

// Search by brand

let searchByBrand = document.getElementById("searchByBrand");
document.getElementById("seachbtn").addEventListener("click", async () => {
  let search = searchByBrand.value;
  let data = await fetch(
    `${API_URL_JSON}/ALLProducts?q=${search}`
  );
  data = await data.json();
  if(data.length != 0){
    displaydata(data);
  }
});

// ------------------------------------

// Reset All

let resetbtn = document
  .getElementById("resetbtn")
  .addEventListener("click", () => {
    Popular_Combo_Deal_Filter.checked = false;
    Calcium_supplement_Filter.checked = false;
    Spotlight_Filter.checked = false;
    Treading_Filter.checked = false;
    Breakfast_Filter.checked = false;
    Bodymassagers_Filter.checked = false;
    FootHealth_Filter.checked = false;
    AllProducts_Filter.checked = false;
    highToLow.checked = false;
    lowToHigh.checked = false;
    searchByBrand.value = "";

    displaydata(AllProducts);
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

// from navbar

let userName = localStorage.getItem("userName");

if (userName === null) {
  document
    .getElementById("login_button")
    .addEventListener("click", function () {
      // Redirect to login.html when login button is clicked
      window.location.href = "login.html";
    });

  document
    .getElementById("signup_button")
    .addEventListener("click", function () {
      // Redirect to signup.html when signup button is clicked
      window.location.href = "signup.html";
    });
} else {
  // Update the login button text with user name
  document.getElementById("login_button").innerHTML = `Welcome, ${userName}`;
  // Disable the login button link
  document.getElementById("login_button").href = "#";
  // Hide the vertical line between the login and signup buttons
  document.getElementById("login_button").nextSibling.textContent = "";
  // Update the signup button text with user name
  document.getElementById("signup_button").textContent = "";
}
