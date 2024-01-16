let UserName = document.getElementById("UserWelcome");
let container = document.querySelector(".container");
let TotalPrice = document.querySelector(".TotalPrice");
let logout = document.querySelector(".Logout");
let logoRefresh = document.querySelector(".refresh");
let heartcontainer = document.querySelector(".heartcontainer");
let leftarrow = document.querySelector(".left");
let rightarrow = document.querySelector(".right");

logout.addEventListener("click", () => {
  localStorage.clear();
  window.location = "./Login.html";
});

logoRefresh.addEventListener("click", function () {
  window.location = "./index.html";
});

function CheckLocal() {
  let UserInfo = JSON.parse(localStorage.getItem("User"));
  if (UserInfo !== "") {
    UserName.innerHTML = `Wellcome ${UserInfo.firstname}`;
  }
}
CheckLocal();
function StoreLocalStorage() {
  localStorage.setItem("Products", JSON.stringify(CartData));
}

var CartData = JSON.parse(localStorage.getItem("Products"));
console.log(CartData);

var filtredData;
function filterData() {
  filtredData = CartData.filter((product) => {
    return product.active == "Remove";
  });
}

function DisplayFilterdData() {
  filterData();
  let ToDisplay = filtredData.map((item) => {
    return `<div class="box">
          <div class="Boxpho">
            <img src="${item.photo}" alt="" />
          </div>
          <div class="Boxinfo">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <p>${item.catagory}</p>
            <div class="cartboxinfo">
              <span class="itemlen">${item.len}</span>
              <span class="increse" onClick="ClickPlus(${item.id})"><i class="fas fa-plus"></i></span>
              <span class="decrese" onClick="ClickMinus(${item.id})"><i class="fas fa-minus"></i></span>
            </div>
            <button class="rev" onClick="RemoveItem(${item.id})">Remove</button>
          </div>
        </div>`;
  });
  container.innerHTML = ToDisplay.join("");
}
DisplayFilterdData();

function GetTotalPrice() {
  let GetTotalPrice = filtredData.map((item) => {
    return item.price * item.len;
  });
  console.log(GetTotalPrice);
  TotalPrice.innerHTML =
    "Total Price " +
    GetTotalPrice.reduce((acc, curr) => {
      return acc + curr;
    }) +
    "$";
}
GetTotalPrice();

function ClickPlus(id) {
  let FoundItem = filtredData.find((item) => {
    return item.id == id;
  });
  FoundItem.len += 1;
  StoreLocalStorage();
  DisplayFilterdData();
  GetTotalPrice();
}
function ClickMinus(id) {
  let FoundItem = filtredData.find((item) => {
    return item.id == id;
  });
  FoundItem.len -= 1;
  StoreLocalStorage();
  DisplayFilterdData();
  GetTotalPrice();
  if (FoundItem.len < 1) {
    FoundItem.active = false;
    FoundItem.stat = "Add To Cart";
    FoundItem.len = 1;

    filterData();
    StoreLocalStorage();
    DisplayFilterdData();
    GetTotalPrice();
  }
}

function RemoveItem(id) {
  let FoundItem = filtredData.find((item) => {
    return item.id == id;
  });
  FoundItem.active = false;
  FoundItem.stat = "Add To Cart";
  FoundItem.len = 1;
  filterData();
  StoreLocalStorage();
  GetTotalPrice();
  DisplayFilterdData();
}

let FavProducts;
function GetFavoriteData() {
  FavProducts = CartData.filter((item) => {
    return item.Fav == "heart";
  });
  console.log(FavProducts);
}
GetFavoriteData();

function DisplayFavoriteProducts() {
  let favitem = FavProducts.map((item) => {
    return `<div class="heartbox">
          <div class="heartpho">
            <img src="${item.photo}" alt="" />
          </div>
          <div class="heartinfo">
            <p>${item.name}</p>
            <span>${item.catagory}</span>
            <i class="fas fa-heart" onClick="RemoveHeart(${item.id})"></i>
          </div>
        </div>`;
  });
  heartcontainer.innerHTML = favitem.join("");
}
DisplayFavoriteProducts();

let isAnimating = false;

leftarrow.onclick = function () {
  if (!isAnimating) {
    animateScroll(-350);
  }
};

rightarrow.onclick = function () {
  if (!isAnimating) {
    animateScroll(350);
  }
};

function animateScroll(distance) {
  const startTime = performance.now();
  const startScroll = heartcontainer.scrollLeft;
  const endScroll = startScroll + distance;
  const duration = 500;

  function scroll(time) {
    isAnimating = true;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    heartcontainer.scrollLeft = startScroll + progress * distance;

    if (progress < 1) {
      requestAnimationFrame(scroll);
    } else {
      isAnimating = false;
    }
  }

  requestAnimationFrame(scroll);
}

heartcontainer.addEventListener("scroll", function () {
  updateArrowVisibility();
});

function updateArrowVisibility() {
  var scrollLeft = heartcontainer.scrollLeft;
  var containerWidth = heartcontainer.offsetWidth;
  var totalWidth = heartcontainer.scrollWidth;

  leftarrow.style.display = scrollLeft > 0 ? "block" : "none";
  rightarrow.style.display =
    scrollLeft + containerWidth < totalWidth ? "block" : "none";
}

function RemoveHeart(id) {
  let FoundItem = FavProducts.find((item) => {
    return item.id == id;
  });
  FoundItem.Fav = false;
  StoreLocalStorage();
  GetFavoriteData();
  DisplayFavoriteProducts();
}
