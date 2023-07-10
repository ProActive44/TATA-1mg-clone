// var addarr = JSON.parse(localStorage.getItem("address")) || [];
  var adddata = JSON.parse(localStorage.getItem("address")) || [];

  function save() {
    var FlatNo = document.querySelector("#flatno");
    var landmark = document.querySelector("#landmarkno");
    var Pincodeno = document.querySelector("#Pincodeno");
    var locality = document.querySelector("#localityno");
    var cityno = document.querySelector("#cityno");
    var stateno = document.querySelector("#stateno");
    var custname = document.querySelector("#custname");
    var custmobile = document.querySelector("#custmobile");

    if (FlatNo.value === "") {
    alert("Please enter Flat No.");
    FlatNo.focus();
    return;
  }

  if (landmark.value === "") {
    alert("Please enter landmark");
    landmark.focus();
    return;
  }

  if (Pincodeno.value === "") {
    alert("Please enter Pincode");
    Pincodeno.focus();
    return;
  }

  if (locality.value === "") {
    alert("Please enter locality");
    locality.focus();
    return;
  }

  if (cityno.value === "") {
    alert("Please enter city");
    cityno.focus();
    return;
  }

  if (stateno.value === "") {
    alert("Please enter state");
    stateno.focus();
    return;
  }

    var addobj = {
      FlatNo: FlatNo.value,
      landmark: landmark.value,
      Pincodeno: Pincodeno.value,
      locality: locality.value,
      cityno: cityno.value,
      stateno: stateno.value,
    };
    adddata.push(addobj);
    localStorage.setItem("address", JSON.stringify(adddata));
    // var adddata = JSON.parse(localStorage.getItem("address")) || [];
    display(adddata);
  }

  function display(adddata) {
    document.querySelector("#youradd").innerText = "";
    adddata.map((elem, idx)=> {
      var maindiv = document.createElement("div");
      maindiv.setAttribute("id", "inner_main_div");

      var add_div = document.createElement("div");
      var inputdiv = document.createElement("div");
      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("id", "choose");
      inputdiv.append(input);
      input.addEventListener("focus", function () {
        maindiv.style.backgroundColor = 'grey'
        document
          .querySelector("#con_id")
          .addEventListener("click", function () {
            window.location.href = "finalpayment.html";
          });
      });

      var icon_div = document.createElement("div");
      var trash = document.createElement("img");
      trash.setAttribute(
        "src",
        "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/20/000000/external-trash-essentials-tanah-basah-basic-outline-tanah-basah-3.png"
      );
      var edit = document.createElement("img");
      edit.setAttribute(
        "src",
        "https://img.icons8.com/external-ios-line-2px-amoghdesign/20/000000/external-edit-multimedia-line-30px-ios-line-2px-amoghdesign.png"
      );
      icon_div.append(trash, edit);
      icon_div.setAttribute("id", "icon_div");

      trash.addEventListener("click", function () {
        adddata.splice(idx, 1);
        // addarr.splice(index, Idx);
        localStorage.setItem("address", JSON.stringify(adddata));
        display(adddata);
      });

      var FlatNo = document.createElement("div");
      FlatNo.innerText = elem.FlatNo;

      var cityno = document.createElement("div");
      cityno.innerText = elem.cityno;

      var stateno = document.createElement("div");
      stateno.innerText = elem.stateno;

      add_div.append(FlatNo, cityno, stateno);
      maindiv.append(inputdiv, add_div, icon_div);
      document.querySelector("#youradd").append(maindiv);
    });
  }

  display(adddata);

  document.querySelector("#Home").addEventListener("blur", function () {
    location.reload();
  });

  document.querySelector("#Office").addEventListener("blur", function () {
    location.reload();
  });

  document.querySelector("#Other").addEventListener("blur", function () {
    location.reload();
  });

  function returntocart() {
    window.location.href = "cartPage.html";
    localStorage.removeItem("addressuser");
  }

  document.querySelector(".com_logo").addEventListener("click", function () {
    window.location.href = "index.html";
  });