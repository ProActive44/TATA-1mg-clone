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

// ----- For Slideshow in part-1 ---------------------------------------
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 6000);
// ----------------------------------------------------------------------

var windowWidth = window.innerWidth;
// console.log("Window width: " + windowWidth + "px");

// ---- For slide buttons in part-4 -----------------------------------------------------

var lastWidth;
let leftShift = 300;
document
  .querySelector("#part-4 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + leftShift + " " + lastWidth);
    document.querySelector("#part-4 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-4 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-4 .healthConcernsDivs"
    ).style.margin = `0 0 0 -${leftShift}px`;
    document.querySelector("#part-4 .healthConcernsDivs").style.transition =
      "0.5s";
    leftShift += 300;
    if (windowWidth < 500) {
      lastWidth = 1600;
    } else if (windowWidth < 700) {
      lastWidth = 1200;
    } else if (windowWidth < 1000) {
      lastWidth = 900;
    } else if (windowWidth < 1400) {
      lastWidth = 600;
    } else {
      lastWidth = 300;
    }

    if (leftShift > lastWidth) {
      document.querySelector("#part-4 .pseudonext").style.opacity = "0";
      leftShift = 300;
    }
  });

// let rightShift = 0;
document
  .querySelector("#part-4 .pseudoprev")
  .addEventListener("click", function () {
    // console.log("call")
    document.querySelector("#part-4 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-4 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-4 .pseudonext").style.opacity = "1";

    document.querySelector("#part-4 .healthConcernsDivs").style.margin =
      "0 0 0 0";
    document.querySelector("#part-4 .healthConcernsDivs").style.transition =
      "1s";
    leftShift = 300;
  });
// -------------------------------------------------------------------------------------

// ---- For slide buttons in part-5 ---------------------------------------------------

var part5_lastWidth;
let part5_LeftShift = 300;
document
  .querySelector("#part-5 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part5_LeftShift + " " + part5_lastWidth);
    document.querySelector("#part-5 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-5 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-5 .healthConcernsDivs"
    ).style.margin = `0 0 0 -${part5_LeftShift}px`;
    document.querySelector("#part-5 .healthConcernsDivs").style.transition =
      "0.5s";
    part5_LeftShift += 300;

    if (windowWidth < 500) {
      part5_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part5_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part5_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part5_lastWidth = 600;
    } else {
      part5_lastWidth = 300;
    }

    if (part5_LeftShift > part5_lastWidth) {
      document.querySelector("#part-5 .pseudonext").style.opacity = "0";
      part5_LeftShift = 300;
    }
  });

document
  .querySelector("#part-5 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-5 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-5 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-5 .pseudonext").style.opacity = "1";

    document.querySelector("#part-5 .healthConcernsDivs").style.margin =
      "0 0 0 0";
    document.querySelector("#part-5 .healthConcernsDivs").style.transition =
      "1s";
    part5_LeftShift = 300;
  });

// -------------------------------------------------------------------------------

// ---- For slide buttons in part-8 ---------------------------------------------------

var part8_lastWidth;
let part8_LeftShift = 300;
document
  .querySelector("#part-8 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part8_LeftShift + " " + part8_lastWidth);
    document.querySelector("#part-8 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-8 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-8 .part-8-main-Container .first"
    ).style.margin = `0 0 0 -${part8_LeftShift}px`;
    document.querySelector(
      "#part-8 .part-8-main-Container .first"
    ).style.transition = "0.5s";
    part8_LeftShift += 300;

    if (windowWidth < 500) {
      part8_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part8_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part8_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part8_lastWidth = 600;
    } else {
      part8_lastWidth = 300;
    }

    if (part8_LeftShift > part8_lastWidth) {
      document.querySelector("#part-8 .pseudonext").style.opacity = "0";
      part8_LeftShift = 300;
    }
  });

document
  .querySelector("#part-8 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-8 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-8 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-8 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-8 .part-8-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-8 .part-8-main-Container .first"
    ).style.transition = "1s";
    part8_LeftShift = 300;
  });

// -------------------------------------------------------------------------------\

// ---- For slide buttons in part-9 ---------------------------------------------------

var part9_lastWidth;
let part9_LeftShift = 300;
document
  .querySelector("#part-9 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part9_LeftShift + " " + part9_lastWidth);
    document.querySelector("#part-9 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-9 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-9 .part-9-main-Container .first"
    ).style.margin = `0 0 0 -${part9_LeftShift}px`;
    document.querySelector(
      "#part-9 .part-9-main-Container .first"
    ).style.transition = "0.5s";
    part9_LeftShift += 300;

    if (windowWidth < 500) {
      part9_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part9_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part9_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part9_lastWidth = 600;
    } else {
      part9_lastWidth = 300;
    }

    if (part9_LeftShift > part9_lastWidth) {
      document.querySelector("#part-9 .pseudonext").style.opacity = "0";
      part9_LeftShift = 300;
    }
  });

document
  .querySelector("#part-9 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-9 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-9 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-9 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-9 .part-9-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-9 .part-9-main-Container .first"
    ).style.transition = "1s";
    part9_LeftShift = 300;
  });

// --------------------------------------------------------------------

// ---- For slide buttons in part-12 ---------------------------------------------------

var part12_lastWidth;
let part12_LeftShift = 300;
document
  .querySelector("#part-12 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part12_LeftShift + " " + part12_lastWidth);
    document.querySelector("#part-12 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-12 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-12 .part-12-main-Container .first"
    ).style.margin = `0 0 0 -${part12_LeftShift}px`;
    document.querySelector(
      "#part-12 .part-12-main-Container .first"
    ).style.transition = "0.5s";
    part12_LeftShift += 300;

    if (windowWidth < 500) {
      part12_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part12_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part12_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part12_lastWidth = 600;
    } else {
      part12_lastWidth = 300;
    }

    if (part12_LeftShift > part12_lastWidth) {
      document.querySelector("#part-12 .pseudonext").style.opacity = "0";
      part12_LeftShift = 300;
    }
  });

document
  .querySelector("#part-12 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-12 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-12 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-12 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-12 .part-12-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-12 .part-12-main-Container .first"
    ).style.transition = "1s";
    part12_LeftShift = 300;
  });

// --------------------------------------------------------------------

// ---- For slide buttons in part-13 ---------------------------------------------------

var part13_lastWidth;
let part13_LeftShift = 300;
document
  .querySelector("#part-13 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part13_LeftShift + " " + part13_lastWidth);
    document.querySelector("#part-13 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-13 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-13 .part-13-main-Container .first"
    ).style.margin = `0 0 0 -${part13_LeftShift}px`;
    document.querySelector(
      "#part-13 .part-13-main-Container .first"
    ).style.transition = "0.5s";
    part13_LeftShift += 300;

    if (windowWidth < 500) {
      part13_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part13_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part13_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part13_lastWidth = 600;
    } else {
      part13_lastWidth = 300;
    }

    if (part13_LeftShift > part13_lastWidth) {
      document.querySelector("#part-13 .pseudonext").style.opacity = "0";
      part13_LeftShift = 300;
    }
  });

document
  .querySelector("#part-13 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-13 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-13 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-13 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-13 .part-13-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-13 .part-13-main-Container .first"
    ).style.transition = "1s";
    part13_LeftShift = 300;
  });

// --------------------------------------------------------------------

// ---- For slide buttons in part-14 ---------------------------------------------------

var part14_lastWidth;
let part14_LeftShift = 300;
document
  .querySelector("#part-14 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part14_LeftShift + " " + part14_lastWidth);
    document.querySelector("#part-14 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-14 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-14 .part-14-main-Container .first"
    ).style.margin = `0 0 0 -${part14_LeftShift}px`;
    document.querySelector(
      "#part-14 .part-14-main-Container .first"
    ).style.transition = "0.5s";
    part14_LeftShift += 300;

    if (windowWidth < 500) {
      part14_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part14_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part14_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part14_lastWidth = 600;
    } else {
      part14_lastWidth = 300;
    }

    if (part14_LeftShift > part14_lastWidth) {
      document.querySelector("#part-14 .pseudonext").style.opacity = "0";
      part14_LeftShift = 300;
    }
  });

document
  .querySelector("#part-14 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-14 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-14 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-14 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-14 .part-14-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-14 .part-14-main-Container .first"
    ).style.transition = "1s";
    part14_LeftShift = 300;
  });

// --------------------------------------------------------------------

// ---- For slide buttons in part-15 ---------------------------------------------------

var part15_lastWidth;
let part15_LeftShift = 300;
document
  .querySelector("#part-15 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part15_LeftShift + " " + part15_lastWidth);
    document.querySelector("#part-15 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-15 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-15 .part-15-main-Container .first"
    ).style.margin = `0 0 0 -${part15_LeftShift}px`;
    document.querySelector(
      "#part-15 .part-15-main-Container .first"
    ).style.transition = "0.5s";
    part15_LeftShift += 300;

    if (windowWidth < 500) {
      part15_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part15_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part15_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part15_lastWidth = 600;
    } else {
      part15_lastWidth = 300;
    }

    if (part15_LeftShift > part15_lastWidth) {
      document.querySelector("#part-15 .pseudonext").style.opacity = "0";
      part15_LeftShift = 300;
    }
  });

document
  .querySelector("#part-15 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-15 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-15 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-15 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-15 .part-15-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-15 .part-15-main-Container .first"
    ).style.transition = "1s";
    part15_LeftShift = 300;
  });

// --------------------------------------------------------------------

// ---- For slide buttons in part-16 ---------------------------------------------------

var part16_lastWidth;
let part16_LeftShift = 300;
document
  .querySelector("#part-16 .pseudonext")
  .addEventListener("click", function () {
    console.log("call" + part16_LeftShift + " " + part16_lastWidth);
    document.querySelector("#part-16 .pseudoprev").style.opacity = "1";
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-16 .pseudonext").style.transition = "1s";
    document.querySelector(
      "#part-16 .part-16-main-Container .first"
    ).style.margin = `0 0 0 -${part16_LeftShift}px`;
    document.querySelector(
      "#part-16 .part-16-main-Container .first"
    ).style.transition = "0.5s";
    part16_LeftShift += 300;

    if (windowWidth < 500) {
      part16_lastWidth = 1600;
    } else if (windowWidth < 700) {
      part16_lastWidth = 1200;
    } else if (windowWidth < 1000) {
      part16_lastWidth = 900;
    } else if (windowWidth < 1400) {
      part16_lastWidth = 600;
    } else {
      part16_lastWidth = 300;
    }

    if (part16_LeftShift > part16_lastWidth) {
      document.querySelector("#part-16 .pseudonext").style.opacity = "0";
      part16_LeftShift = 300;
    }
  });

document
  .querySelector("#part-16 .pseudoprev")
  .addEventListener("click", function () {
    document.querySelector("#part-16 .pseudoprev").style.opacity = "0";
    document.querySelector("#part-16 .pseudoprev").style.transition = "1s";
    document.querySelector("#part-16 .pseudonext").style.opacity = "1";

    document.querySelector(
      "#part-16 .part-16-main-Container .first"
    ).style.margin = "0 0 0 0";
    document.querySelector(
      "#part-16 .part-16-main-Container .first"
    ).style.transition = "1s";
    part16_LeftShift = 300;
  });

// --------------------------------------------------------------------

// All Arrays fetch and display here ------------------------------

let displaydata = (data, container) => {
  container.textContent = "";

  data.map((ele, idx) => {
    let div = document.createElement("div");

    div.classList = "part-8-Container-card";
    if (idx === 0) {
      div.classList = "first part-8-Container-card";
    }
    div.addEventListener("click", function () {
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

    let img = document.createElement("img");
    img.src = ele.image;
    img.alt = ele.title;

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

    div.append(img, h3, desc, oldPriceDiv, MRP);

    container.append(div);
  });
};

let getdata = async (url, container) => {
  let div = document.createElement("div");
  div.classList = "part-8-Container-card";
  // div.style.border = '1px solid red'

  let loading = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = "Loading...";
  loading.append(h3);

  div.append(loading);
  div.style.height = "350px";
  container.append(div);
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
    displaydata(data, container);
  } catch (error){
    console.log(error);
  }
};

// ---------------------------------------------------------------------------------

// -------part-8 Popular_Combo_Deals Array Fetching and appending here--------

let PopularCombo = document.querySelector(".part-8-main-Container");
getdata(`${API_URL}/Popular_Combo_Deals`, PopularCombo);

// -------part-9 Calcium_supplements Array Fetching and appending here--------

let Calcium_supplement = document.querySelector(".part-9-main-Container");
getdata(`${API_URL}/Calcium_supplement`, Calcium_supplement);

// -------part-12 In the Spotlight Array Fetching and appending here--------

let spotlight = document.querySelector(".part-12-main-Container");
getdata(`${API_URL}/Spotlight`, spotlight);

// -------part-13 Treanding now Array Fetching and appending here--------

let Treanding = document.querySelector(".part-13-main-Container");
getdata(`${API_URL}/Treading`, Treanding);

// -------part-14 Breakfast Array Fetching and appending here--------

let Breakfast = document.querySelector(".part-14-main-Container");
getdata(`${API_URL}/Breakfast`, Breakfast);

// -------part-15 Bodymassagers Array Fetching and appending here--------

let Bodymassagers = document.querySelector(".part-15-main-Container");
getdata(`${API_URL}/Bodymassagers`, Bodymassagers);

// -------part-16 FootHealth Array Fetching and appending here--------

let FootHealth = document.querySelector(".part-16-main-Container");
getdata(`${API_URL}/FootHealth`, FootHealth);

// ---------------------------------------------------------------------------------



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

// searchbar debouncing  -----------------------------------------------------------------

const searchInput = document.querySelector(".search_input");
const resultsList = document.getElementById("results");

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

function goToProductdetails() {
  window.location.href = "product.html";
}

const search = debounce(function () {
  const query = searchInput.value;
  if (query === "") {
    resultsList.innerHTML = "";
    resultsList.style.display = "none";
    return;
  }
  fetch(`${API_URL_JSON}/ALLProducts?q=${query}`)
    .then((response) => response.json())
    .then((res) => {
      // let data = res.data
      let data = res
      console.log(res)
      resultsList.innerHTML = "";
      resultsList.style.display = "none";
      data?.forEach((result) => {
        const li = document.createElement("li");
        li.classList = "debounceList";
        li.textContent = result.title;
        resultsList.appendChild(li);
        resultsList.style.display = "flex";

        li.addEventListener("click", function () {
          goToProductdetails();
        });
      });
    })
    .catch((error) => console.log(error));
}, 500);

searchInput.addEventListener("input", search);
resultsList.style.display = "none";

// ------------------------------------------------------------------------
