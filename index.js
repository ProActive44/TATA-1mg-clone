// fetch('index.css')
//   .then(response => response.text())
//   .then(css => {
//     const styleElement = document.createElement('style');

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
console.log("Window width: " + windowWidth + "px");

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
    document.querySelector("#part-8 .part-8-main-Container .first").style.transition =
      "0.5s";
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

    document.querySelector("#part-8 .part-8-main-Container .first").style.margin =
      "0 0 0 0";
    document.querySelector("#part-8 .part-8-main-Container .first").style.transition =
      "1s";
    part8_LeftShift = 300;
  });

// -------------------------------------------------------------------------------\

// styleElement.textContent = css + '#container { background-color: red; }  body{color:green}';
//     document.head.appendChild(styleElement);
//   })
//   .catch(error => console.error('Error fetching CSS:', error));

// ------- Popular_Combo_Deals Array Fetching and appending here--------

let PopularCombo = document.querySelector(".part-8-main-Container");

let displayPopularCombo = (data) => {
    
    PopularCombo.textContent = "";

    data.map((ele, idx) => {
     
    let div = document.createElement("div");
    div.classList = "part-8-Container-card";
    if (idx === 0) {
      div.classList = "first part-8-Container-card";
    }

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
    MRP.classList = "price"
    MRP.innerHTML = `₹<span>${ele.price}</span>`;

    div.append(img, h3, desc, oldPriceDiv, MRP)
    
    PopularCombo.append(div)
  });
};


let getdata = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        displayPopularCombo(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// var data = [
//     {
//       "id": 1,
//       "title": "Tata 1mg Diabetes Care Combo Pack for Cholesterol & Blood Sugar Management",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg",
//       "rating": 4.4,
//       "description": "combo pack of 3 Packs",
//       "oldMRP": 1085,
//       "discount": "50%OFF",
//       "price": "539"
//     },
//     {
//       "id": 2,
//       "title": "Accu-Chek Combo Pack of Active 50 Test Strip & 2 Pack of Softclix Lancet (25 Each)",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg",
//       "rating": 4.3,
//       "description": "combo pack of 3 units",
//       "oldMRP": 1299,
//       "discount": "11%OFF",
//       "price": "1146"
//     },
//     {
//       "id": 3,
//       "title": "Combo Pack of Tata 1mg Multivitamin Supreme Capsule (60) & Dr. Morepen Omega 3 Deep Sea Fish Oil Triple Strength Softgel (30)",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg",
//       "rating": 4.3,
//       "description": "combo pack of 2 bottles",
//       "oldMRP": 1644,
//       "discount": "45%OFF",
//       "price": "900"
//     },
//     {
//       "id": 4,
//       "title": "Combo Pack of Tata 1mg Multivitamin Supreme Capsule (60) & Dr. Morepen Omega 3 Deep Sea Fish Oil Triple Strength Softgel (30)",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
//       "rating": 4.5,
//       "description": "combo pack of 2 Packs",
//       "oldMRP": 335,
//       "discount": "29%OFF",
//       "price": "238"
//     },
//     {
//       "id": 5,
//       "title": "Acne Care Combo of Cetaphil Oily Skin Cleanser 125ml and Klm Klin Face Wash 100ml",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg",
//       "rating": 4.3,
//       "description": "combo pack of 2 Packs",
//       "oldMRP": 820,
//       "discount": "15%OFF",
//       "price": "697"
//     },
//     {
//       "id": 6,
//       "title": "Accu-Chek Active Combo of Glucometer with 10 Test Strip Free and 50 Test Strips",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg",
//       "rating": 4.3,
//       "description": "combo pack of 2 Packs",
//       "oldMRP": 2048,
//       "discount": "12%OFF",
//       "price": "1792"
//     },
//     {
//       "id": 7,
//       "title": "OneTouch Select Plus Simple Glucometer Value Pack (with 10 Test Strip Free) + 1 Pack of 50 Test Strip + 2 Pack of 25 Lancet",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg",
//       "rating": 4.3,
//       "description": "combo pack of 4 Packs",
//       "oldMRP": 2612,
//       "discount": "13%OFF",
//       "price": "2267"
//     },
//     {
//       "id": 8,
//       "title": "Pain Relief Combo of Dr Ortho Oil 120ml and Organic India Turmeric Formula 60 Veg Capsule",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/oexechydeypou9aw45xc.jpg",
//       "rating": 4.2,
//       "description": "combo pack of 2 bottles",
//       "oldMRP": 620,
//       "discount": "7%OFF",
//       "price": "577"
//     },
//     {
//       "id": 9,
//       "title": "Anti-oxidants Combo of Organic India Lemon Ginger Tulsi Green Tea 25 Tea Bag and Dabur Honey 1kg",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg",
//       "rating": 4.4,
//       "description": "combo pack of 2 Packs",
//       "oldMRP": 689,
//       "discount": "14%OFF",
//       "price": "588"
//     },
//     {
//       "id": 10,
//       "title": "Oral Care Combo of Listerine Mouth Wash Cool Mint 500ml and Sensodyne Repair & Protect Toothpaste 100gm",
//       "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/g6phmkjrdbw3x4nngxlr.jpg",
//       "rating": 4.5,
//       "description": "combo pack of 2 Packs",
//       "oldMRP": 550,
//       "discount": "6%OFF",
//       "price": "518"
//     }
//   ]



//   displayPopularCombo(data)
getdata("https://onemg-server-1muy.onrender.com/Popular_Combo_Deals")