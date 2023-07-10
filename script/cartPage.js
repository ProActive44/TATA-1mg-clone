// footer part
import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer();

var numberOfProducts = document.querySelector(".pDiv>div>h2");

//cart object
var data = JSON.parse(localStorage.getItem("data")) || [];

if (data.length != 0) {
  var len = data.length;
  if (len == 1) {
    numberOfProducts.textContent = "My Cart ( " + len + " Item )";
  } else {
    numberOfProducts.textContent = "My Cart ( " + len + " Items )";
  }
}

products(data);
var grandTotalDiv = document.querySelector(".GTotalDiv");

var tP = document.createElement("p");
tP.setAttribute("class", "tP");
var gTotal = document.createElement("p");
gTotal.setAttribute("class", "gTotal");

//display cart object data
function products(data) {
  document.querySelector(".productsDiv").innerHTML = "";
  var len = data.length;
  numberOfProducts.textContent = "My Cart ( " + len + " Item )";
  var productsDiv = document.querySelector(".productsDiv");
  var pDiv = document.querySelector(".pDiv");
  var h = 350 + 116 * data.length;
  if (data.length >= 2) {
    var h1 = h.toString();
    // pDiv.style.height = h1+"px";
  }
  data.map(function (ele, index) {
    var pD = document.createElement("div");
    pD.setAttribute("class", "pD");
    pD.style.display = "flex";

    var imgD = document.createElement("div");
    imgD.setAttribute("class", "imgD");

    // var imgLink = document.createElement("img");
    // imgLink.setAttribute("class", "imgLink");
    // imgLink.setAttribute("src", ele.img);

    // imgD.append(imgLink);

    var p_title = document.createElement("div");
    p_title.setAttribute("class", "p_title");

    var p_name = document.createElement("a");
    p_name.setAttribute("class", "p_name");
    p_name.textContent = ele.name;

    // var s_size = document.createElement('span');
    // s_size.setAttribute('class','s_size');
    // s_size.textContent = "Size Men Upper: "+ele.size;

    var b1 = document.createElement("br");

    p_title.append(p_name, b1);

    var p_quantity = document.createElement("div");
    p_quantity.setAttribute("class", "p_quantity");

    var minus = document.createElement("a");
    minus.setAttribute("class", "minus");
    minus.textContent = "−";

    var quantity = document.createElement("span");
    quantity.setAttribute("class", "quantity");
    var quan = 1;
    quantity.textContent = quan;

    var plus = document.createElement("a");
    plus.setAttribute("class", "plus");
    plus.textContent = "+";

    var remove = document.createElement("a");
    remove.setAttribute("class", "remove");
    remove.textContent = "Remove";

    remove.addEventListener("click", function () {
      deletefunction(index);
      updateTotalMinus(t);
    });

    minus.addEventListener("click", dec);
    plus.addEventListener("click", inc);

    function dec() {
      if (quan == 1) {
        quan = 1;
        quantity.textContent = quan;
      } else {
        quan = quan - 1;
        quantity.textContent = quan;
        displayDataMinus(quan);
      }
    }

    function inc() {
      quan = quan + 1;
      quantity.textContent = quan;
      displayDataPlus(quan);
    }

    var b2 = document.createElement("br");
    p_quantity.append(minus, quantity, plus, b2, remove);

    var priceD = document.createElement("div");
    priceD.setAttribute("class", "priceD");

    var price = document.createElement("span");
    price.setAttribute("class", "price");
    price.textContent = "Price : ";

    // var p = ele.price.split('');
    // var pri = p[2] + p[3] + p[4];
    var reducedprice = ele.price;

    var m = +ele.mrp;
    var mrp = m;
    var maxprice = mrp;

    var pricespan = document.createElement("span");
    pricespan.setAttribute("class", "pricespan");
    pricespan.textContent = "Rs " + maxprice;
    var mp = maxprice;

    var discount = document.createElement("span");
    discount.setAttribute("class", "discount");
    discount.textContent = "Discount : ";

    var discountspan = document.createElement("span");
    discountspan.setAttribute("class", "discountspan");
    var d = maxprice - reducedprice;
    discountspan.textContent = "- Rs " + d;
    var n = d;

    var shipping_fee = document.createElement("span");
    shipping_fee.setAttribute("class", "shipping_fee");
    shipping_fee.textContent = "Shipping Fee : ";

    // var shipping = 20;
    var shippingspan = document.createElement("span");
    shippingspan.setAttribute("class", "shippingspan");
    // shippingspan.textContent = "Rs "+shipping;
    shippingspan.textContent = "FREE";
    // var s = shipping;

    var b3 = document.createElement("br");
    var b4 = document.createElement("br");
    priceD.append(
      price,
      pricespan,
      b3,
      discount,
      discountspan,
      b4,
      shipping_fee,
      shippingspan
    );

    var tpDiv = document.createElement("div");
    tpDiv.setAttribute("class", "tpDiv");

    var tPrice = document.createElement("span");
    tPrice.setAttribute("class", "tPrice");
    // var total = reducedprice + shipping;
    // var t = reducedprice + shipping;

    var total = reducedprice;
    var t = reducedprice;
    tPrice.textContent = "Rs " + total;
    console.log(total);

    var pRules = document.createElement("p");
    pRules.setAttribute("class", "pRules");
    pRules.textContent = "Inclusive of all applicable taxes";

    var b5 = document.createElement("br");
    tpDiv.append(tPrice, b5, pRules);

    pD.append(imgD, p_title, p_quantity, priceD, tpDiv);

    var bottomline = document.createElement("hr");
    productsDiv.append(pD, bottomline);

    function displayDataMinus(quan) {
      total = total - parseInt(t);
      maxprice = maxprice - mp;
      d = d - n;
      // shipping = shipping - s;
      // displayPrice(total,t);
      tPrice.textContent = "Rs " + total;
      discountspan.textContent = "- Rs " + d;
      pricespan.textContent = "Rs " + maxprice;
      // shippingspan.textContent = "Rs "+shipping;
      shippingspan.textContent = "FREE";
      updateTotalMinus(t);
    }

    function displayDataPlus(quan) {
      total = parseInt(total) + parseInt(t);
      maxprice = parseInt(maxprice) + parseInt(mp);
      d = d + n;
      // shipping = shipping + s;
      // displayPrice(total,t);
      tPrice.textContent = "Rs " + total;
      discountspan.textContent = "- Rs " + d;
      pricespan.textContent = "Rs " + maxprice;
      // shippingspan.textContent = "Rs "+shipping;
      shippingspan.textContent = "FREE";
      updateTotalPlus(t);
      console.log(t);
    }
  });
}

// display products total price function
var total = 0;
function updateTotal() {
  var pD = document.getElementsByClassName("pD");
  for (var i = 0; i < pD.length; i++) {
    var cartRow = pD[i];
    var priceElement = cartRow.getElementsByClassName("tPrice")[0];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];

    var price = parseInt(priceElement.innerText.replace("Rs", ""));
    var quantity = parseInt(quantityElement.innerText);

    total = total + price * quantity;
  }
  tP.textContent = "Total : Rs " + total;
  gTotal.textContent = "Grand Total : Rs " + total;
}

// display products total price function after pressing minus button
function updateTotalMinus(t) {
  total = total - parseInt(t);
  tP.textContent = "Total : Rs " + total;
  gTotal.textContent = "Grand Total : Rs " + parseInt(total);
}

// display products total price function after pressing plus button
function updateTotalPlus(t) {
  total = total + parseInt(t);
  tP.textContent = "Total : Rs " + total;
  gTotal.textContent = "Grand Total : Rs " + total;
}

var count = 0;
function deletefunction(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  products(data);
}

updateTotal();

var rules = document.createElement("p");
rules.setAttribute("class", "rules");
rules.textContent = "Inclusive of all the applicable taxes";

var place = document.createElement("button");
place.setAttribute("class", "place");
place.textContent = "Checkout";
place.addEventListener("click", () =>{
    let price_arr = []

    price_arr.push(total+20, 20, total-500);
    localStorage.setItem("price_data", JSON.stringify(price_arr));
    window.location.href = "adress.html"
})

grandTotalDiv.append(tP, gTotal, rules, place);

var arrow = document.querySelector(".arrow");
arrow.addEventListener("click", backTo);



function order() {
  var productArr = [];
  var productSize = [];
  var productColor = [];
  data.map(function (ele) {
    productArr.push(ele.name);
    productSize.push(ele.size);
    productColor.push(ele.color_family);
  });

  var productQuantity = [];
  var pD = document.getElementsByClassName("pD");
  for (var i = 0; i < pD.length; i++) {
    var cartRow = pD[i];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
    var quantity = parseInt(quantityElement.innerText);
    productQuantity.push(quantity);
  }

  var gT = document.querySelector(".gTotal");
  gT = gT.innerHTML.replace("Grand Total : Rs ", "");
  var g = parseInt(gT);
  var orderObj = {
    product_List: productArr,
    product_quantity_List: productQuantity,
    product_size_List: productSize,
    product_color_List: productColor,
    total_Price: g,
  };
  orderArr.push(orderObj);
  localStorage.setItem("orderDatabase", JSON.stringify(orderArr));
  window.location.href = "./address.html";
  console.log(orderArr);
}

function order1() {
  var productArr = [];
  var productSize = [];
  var productColor = [];
  data.map(function (ele) {
    productArr.push(ele.name);
    productSize.push(ele.size);
    productColor.push(ele.color_family);
  });

  var productQuantity = [];
  var pD = document.getElementsByClassName("pD");
  for (var i = 0; i < pD.length; i++) {
    var cartRow = pD[i];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
    var quantity = parseInt(quantityElement.innerText);
    productQuantity.push(quantity);
  }

  var gT = document.querySelector(".gTotal");
  gT = gT.innerHTML.replace("Grand Total : Rs ", "");
  var g = parseInt(gT);
  var orderObj = {
    product_List: productArr,
    product_quantity_List: productQuantity,
    product_size_List: productSize,
    product_color_List: productColor,
    total_Price: g,
  };
  orderArr.push(orderObj);
  localStorage.setItem("orderDatabase", JSON.stringify(orderArr));
  // window.location.href = "./address.html";
  console.log(orderArr);
}

var userCheck = localStorage.getItem("system");
place.addEventListener("click", placeOrder);
var orderArr = [];
console.log(orderArr);

function placeOrder() {
  if (userCheck != "online") {
    order1();
    window.location.href = "login1.html";
  } else {
    if (data.length == 0) {
      alert("Please add product to cart.");
    } else {
      order();
    }
  }
}

// function dataAdd(){

//       localStorage.setItem('data', JSON.stringify(cartItems));
// }

// dataAdd();
