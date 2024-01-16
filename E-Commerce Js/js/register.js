let RSbtn = document.getElementById("btn");
let EmailInput = document.querySelector("input[type='email']");
let PassInput = document.querySelector("input[type='password']");
let FirstInput = document.getElementById("First-Name");
let LastInput = document.getElementById("Last-Name");
let EmailWrongIcon = document.querySelector("form .three .wrong");
let EmailCorrectIcon = document.querySelector("form .three .correct");
let PassWrongIcon = document.querySelector("form .four .wrong");
let PassCorrectIcon = document.querySelector("form .four .correct");

let ProfileData = { firstname: "", Email: "", Pass: "" };
RSbtn.onclick = function (e) {
  e.preventDefault();
  if (
    EmailInput.value !== "" &&
    PassInput.value !== "" &&
    FirstInput.value !== "" &&
    LastInput.value !== "" &&
    EmailInput.value.match(emailvalid) &&
    PassInput.value.match(passwordvalid)
  ) {
    ProfileData.firstname = FirstInput.value;
    ProfileData.Email = EmailInput.value;
    ProfileData.Pass = PassInput.value;
    localStorage.setItem("User", JSON.stringify(ProfileData));
    window.location = "Login.html";
  } else {
    alert("Please Fill Inputs ");
  }
};

let emailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
EmailInput.addEventListener("input", function () {
  if (EmailInput.value.match(emailvalid)) {
    EmailCorrectIcon.style.display = "block";
    EmailWrongIcon.style.display = "none";
  } else {
    EmailWrongIcon.style.display = "block";
    EmailCorrectIcon.style.display = "none";
  }
});

let passwordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
PassInput.addEventListener("input", function () {
  if (PassInput.value.match(passwordvalid)) {
    PassCorrectIcon.style.display = "block";
    PassWrongIcon.style.display = "none";
  } else {
    PassWrongIcon.style.display = "block";
    PassCorrectIcon.style.display = "none";
  }
});
