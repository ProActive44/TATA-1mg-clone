document.querySelector(".paymentmake").addEventListener("click", pay);
var carddetails = JSON.parse(localStorage.getItem("carddetails"));

function pay() {
  var card_num = document.querySelector("#cardnum").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var cvv = document.querySelector("#cvv").value;

  // Check if input fields are filled in
  if (card_num && month && year && cvv) {
    // Check if input values match carddetails
    if (
        card_num.length == 9
   
    ) {
      window.location.href = "OTP.html";
    } else {
      alert("Error: Incorrect card details");
    }
  } else {
    alert("Error: Please fill in all the fields");
  }
}


