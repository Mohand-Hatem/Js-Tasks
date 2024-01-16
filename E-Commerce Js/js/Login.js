let EmailLogin = document.getElementById("Email");
let PassLogin = document.getElementById("Pass");
let LSbtn = document.getElementById("btn");
let EmailWrongIcon = document.querySelector("form .three .wrong");
let EmailCorrectIcon = document.querySelector("form .three .correct");
let PassWrongIcon = document.querySelector("form .four .wrong");
let PassCorrectIcon = document.querySelector("form .four .correct");

console.log(EmailLogin);
console.log(PassLogin);
console.log(LSbtn);

LSbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (localStorage.getItem("User")) {
    let LocalData = JSON.parse(localStorage.getItem("User"));
    if (
      EmailLogin.value === LocalData.Email &&
      PassLogin.value === LocalData.Pass &&
      EmailLogin.value.match(emailvalid) &&
      PassLogin.value.match(passwordvalid)
    ) {
      window.location = "index.html";
    } else {
      alert("Login is Wrong");
    }
  } else {
    alert("Email is not found");
  }
});

let emailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
EmailLogin.addEventListener("input", function () {
  if (EmailLogin.value.match(emailvalid)) {
    EmailCorrectIcon.style.display = "block";
    EmailWrongIcon.style.display = "none";
  } else {
    EmailWrongIcon.style.display = "block";
    EmailCorrectIcon.style.display = "none";
  }
});

let passwordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
PassLogin.addEventListener("input", function () {
  if (PassLogin.value.match(passwordvalid)) {
    PassCorrectIcon.style.display = "block";
    PassWrongIcon.style.display = "none";
  } else {
    PassWrongIcon.style.display = "block";
    PassCorrectIcon.style.display = "none";
  }
});
