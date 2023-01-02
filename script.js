function emailValid() {
  if (document.getElementById("EmailInput").value.indexOf("@") < 1) {
    alert("Incorrect email address.");
  } else {
    alert("Email address submited.");
  }
}

function isAffordable() {
  let yes = "Ano, váš rozpočet je dostatečný pro Vaši volbu";
  let no = "Vaše požadavky bohužel nevyhovují Vašemu rozpočtu";
  if (
    parseFloat(document.getElementById("BuyerPriceCeiling").value) <
    parseFloat(document.getElementById("FinalPrice").value)
  ) {
    document.getElementById("BuyersOption").value = no;
  } else if (
    parseFloat(document.getElementById("BuyerPriceCeiling").value) >
    parseFloat(document.getElementById("FinalPrice").value)
  ) {
    document.getElementById("BuyersOption").value = yes;
  }
}

function calcPrice() {
  var CarBrand = parseFloat(document.querySelector("#CarBrand").value);
  if (document.getElementById("Paint-Laquered").checked) {
    CarBrand = CarBrand * 1.05;
  } else if (document.getElementById("Paint-Metalic").checked) {
    CarBrand = CarBrand * 1.07;
  }

  if (document.getElementById("switch-1").checked) {
    CarBrand += parseFloat(document.getElementById("switch-1").value);
  }
  if (document.getElementById("switch-2").checked) {
    CarBrand += parseFloat(document.getElementById("switch-2").value);
  }
  if (document.getElementById("switch-3").checked) {
    CarBrand += parseFloat(document.getElementById("switch-3").value);
  }
  if (document.getElementById("switch-4").checked) {
    CarBrand *= parseFloat(document.getElementById("switch-4").value);
  }
  document.getElementById("FinalPrice").value = CarBrand;
}
