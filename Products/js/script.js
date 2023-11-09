var allProudcts = document.querySelectorAll(".parent > div");
var content = document.querySelector(".box-content");
var btn = document.getElementById("btn1");
var Price = document.querySelector(".inerPrice");
var TotalPrice = 0;

allProudcts.forEach(function (item) {
  item.onclick = function () {
    content.innerHTML += item.textContent + " + ";
    TotalPrice += +item.getAttribute("price");
    if (content.innerHTML != "") {
      btn.style.display = "block";
    }
  };
});

btn.onclick = function () {
  Price.innerHTML = "Total Price: " + "$" + TotalPrice;
};
