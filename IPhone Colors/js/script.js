var imgs = document.querySelectorAll(".controller img");
var btn1 = document.querySelector(".info button:nth-child(1)");
var btn2 = document.querySelector(".info button:nth-child(2)");
var is = document.querySelector("i");
var mainImage = document.querySelector(".image img");
var hs = document.querySelector("h2");

imgs.forEach((ele) => {
  ele.onclick = function () {
    mainImage.setAttribute("src", ele.getAttribute("src"));
    btn1.style.backgroundColor = `${ele.getAttribute("color")}`;
    btn2.style.backgroundColor = `${ele.getAttribute("color")}`;
    hs.style.color = `${ele.getAttribute("color")}`;
    is.style.color = `${ele.getAttribute("color")}`;
  };
});
