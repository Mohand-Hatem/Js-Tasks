let UserName = document.getElementById("UserWelcome");
let TagLog = document.getElementById("TagLog");
let TagReg = document.getElementById("TagReg");
let Container = document.querySelector("section .container");
let cart = document.getElementById("cart");
let cartlen = document.getElementById("cartlen");
let cartinfo = document.getElementById("cartinfo");
let view = document.querySelector(".view");
let SearchCatagory = document.getElementById("SearchType");
let SearchInput = document.getElementById("SearchInput");
let logoRefresh = document.querySelector(".refresh");
let logout = document.querySelector(".Logout");

var AllProducts = [
  {
    id: 0,
    photo: "./Images/1.jpg",
    name: "PC",
    price: 3549,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 1,
    photo: "./Images/2.jpg",
    name: "Playstation 5",
    price: 25000,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 2,
    photo: "./Images/3.jpg",
    name: "IPhone 15 Pro",
    price: 7500,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 3,
    photo: "./Images/4.jpg",
    name: "AirPods",
    price: 3000,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 4,
    photo: "./Images/5.jpg",
    name: "SmartWatch",
    price: 1700,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 5,
    photo: "./Images/6.jpg",
    name: "Laptop",
    price: 9800,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 6,
    photo: "./Images/7.jpg",
    name: "Controller",
    price: 5700,
    catagory: "Smart",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 7,
    photo: "./Images/8.jpg",
    name: "Guitar",
    price: 6700,
    catagory: "Classic",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 8,
    photo: "./Images/9.jpg",
    name: "Watch",
    price: 22000,
    catagory: "Classic",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 9,
    photo: "./Images/10.jpg",
    name: "Motorcycle",
    price: 3600,
    catagory: "Classic",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 10,
    photo: "./Images/11.jpg",
    name: "Car",
    price: 78100,
    catagory: "Classic",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
  {
    id: 11,
    photo: "./Images/12.jpg",
    name: "Books",
    price: 360,
    catagory: "Classic",
    len: 1,
    active: false,
    Fav: false,
    stat: "Add To Cart",
  },
];

function CheckLogout() {
  if (localStorage.getItem("User")) {
    logout.style.display = "block";
  } else {
    logout.style.display = "none";
  }
  logout.addEventListener("click", () => {
    localStorage.clear();
  });
}
CheckLogout();

logoRefresh.addEventListener("click", function () {
  window.location = "./index.html";
});

let UserInfo = JSON.parse(localStorage.getItem("User"));
function CheckLocalUser() {
  if (UserInfo) {
    UserName.innerHTML = `Wellcome ${UserInfo.firstname}`;
    TagLog.style.display = "none";
    TagReg.style.display = "none";
    cartlist.style.display = "block";
  }
}
CheckLocalUser();

function StoreDataInLocalStorage() {
  localStorage.setItem("Products", JSON.stringify(AllProducts));
}

function GetItemFromLocalStorage() {
  if (localStorage.getItem("Products")) {
    let StorageData = localStorage.getItem("Products");
    AllProducts = JSON.parse(StorageData);
  }
}
GetItemFromLocalStorage();
function DisplayProducts(SpecificArray) {
  SpecificArray = SpecificArray || AllProducts;
  let Store = SpecificArray.map((product) => {
    return `
    <div class="box">
      <div class="image">
        <img src="${product.photo}" alt="" />
      </div>
      <div class="info">
        <p class="name">Product: ${product.name}</p>
        <p class="price">Price: ${product.price}</p>
        <p class="catagory">Catagory: ${product.catagory}</p>
        <div class="markting">
          <button id="btn-cart" class="btn-cart ${product.active}" onClick="ClickButon(${product.id})">${product.stat}</button>
          <i class="fas fa-heart ${product.Fav}" onClick="ClickHeart(${product.id})"></i>
        </div>
      </div>
    </div>
    `;
  });

  Container.innerHTML = Store.join("");
}

DisplayProducts();

function ClickButon(id) {
  if (UserInfo) {
    let item = AllProducts.find((item) => {
      return item.id == id;
    });
    item.active == false ? (item.active = "Remove") : (item.active = false);
    ChangeButtonStatus(item);
    StoreDataInLocalStorage();
    GetItemFromLocalStorage();
    CatchCartItem();
    DisplayProducts();
  } else {
    window.location = "./Login.html";
  }
}

function ClickHeart(id) {
  if (UserInfo) {
    let item = AllProducts.find((item) => {
      return item.id == id;
    });
    item.Fav == false ? (item.Fav = "heart") : (item.Fav = false);
    StoreDataInLocalStorage();
    GetItemFromLocalStorage();
    DisplayProducts();
  } else {
    window.location = "./Login.html";
  }
  console.log(AllProducts);
}

function CatchCartItem() {
  let BasketItems = AllProducts.filter((item) => {
    return item.active == "Remove";
  });
  let StoreBasketItems = BasketItems.map((Ball) => {
    return `<div class="carbox" id="${Ball.id}">
    <div class="name">${Ball.name}</div>
    <div class="cartboxinfo">
      <span class="itemlen">${Ball.len}</span>
       <span class="increse" onClick="ClickPlus(${Ball.id})"><i class="fas fa-plus"></i></span>
       <span class="decrese" onClick="ClickMinus(${Ball.id})"><i class="fas fa-minus"></i></span>
    </div>
  </div>`;
  });
  cartinfo.innerHTML = StoreBasketItems.join("");
  cartlen.innerHTML = BasketItems.length;
  CheckViewProducts();
}
CatchCartItem();

function ShowOrHideCartInfo() {
  cart.addEventListener("click", function () {
    cartinfo.classList.toggle("ShowInfo");
  });
}
ShowOrHideCartInfo();

function ClickPlus(id) {
  let FoundItem = AllProducts.find((item) => {
    return item.id == id;
  });
  FoundItem.len += 1;
  StoreDataInLocalStorage();
  CatchCartItem();
}
function ClickMinus(id) {
  let FoundItem = AllProducts.find((item) => {
    return item.id == id;
  });
  FoundItem.len -= 1;
  StoreDataInLocalStorage();
  CatchCartItem();
  if (FoundItem.len < 1) {
    FoundItem.len = 1;
    FoundItem.active = false;
    ChangeButtonStatus(FoundItem);
    StoreDataInLocalStorage();
    CatchCartItem();
    DisplayProducts();
  }
}

function ChangeButtonStatus(btn) {
  if (btn.active == "Remove") {
    btn.stat = "Remove From Cart";
  } else {
    btn.stat = "Add To Cart";
  }
}

function Search() {
  let filteredItems = [...AllProducts];

  SearchInput.addEventListener("input", function () {
    if (SearchInput.value !== "") {
      if (SearchCatagory.value == 0) {
        filteredItems = AllProducts.filter((item) => {
          return item.catagory
            .toLowerCase()
            .includes(SearchInput.value.toLowerCase());
        });
        DisplayProducts(filteredItems);
      } else if (SearchCatagory.value == 1) {
        filteredItems = AllProducts.filter((item) => {
          return item.name
            .toLowerCase()
            .includes(SearchInput.value.toLowerCase());
        });
        DisplayProducts(filteredItems);
      }
    } else {
      filteredItems = [...AllProducts];
      DisplayProducts(filteredItems);
    }
  });
}
Search();

function CheckViewProducts() {
  if (cartlen.innerHTML > 0) {
    view.style.display = "flex";
  } else if (cartlen.innerHTML <= 0) {
    view.style.display = "none";
    cartinfo.classList.remove("ShowInfo");
  }
}
