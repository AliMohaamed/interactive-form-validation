// Selectors
var btnSubmit = document.querySelector(".btn-submit");
var btnReset = document.querySelector(".btn-reset");
var formContainer = document.getElementById("registrationForm");
var fullName = document.querySelector("[name=fullName]");
var email = document.querySelector("[name=email]");
var password = document.querySelector("[name=password]");
var gender = document.querySelectorAll("[name=gender]");
var sports = document.querySelectorAll("[name=sports]");
var country = document.querySelector("[name=country]");

formContainer.addEventListener("input", function (event) {
  if (event.target.tagName === "INPUT") {
    if (event.target.getAttribute("name") === "fullName")
      validateInput(fullName, validateName);
    else if (event.target.getAttribute("name") === "email")
      validateInput(email, validateEmail);
    else if (event.target.getAttribute("name") === "password")
      validateInput(password, validatePassword);
  }
});
btnReset.addEventListener("click",function(e){
  e.preventDefault();
  fullName.value = email.value = password.value = "";
  gender.forEach((element)=> element.checked = false);
  sports.forEach((element)=> element.checked = false);
  country.children[0].selected = true;
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
  document.querySelectorAll(".input-error").forEach((el) => el.classList.remove("input-error"));
})
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  validateInput(fullName, validateName);
  validateInput(email, validateEmail);
  validateInput(password, validatePassword);
  validateGender(gender);
  validateCheckBox(sports);
  validateCountry(country);

});


// Function
function validateSelection(items, minCount, errorMessage) {
  var selectedItems = [];
  if (items[0].tagName === "OPTION") {
    for (var i = 1; i < items.length; i++)
      if (items[i].selected) selectedItems.push(items[i]);
  } else {
    for (var i = 0; i < items.length; i++)
      if (items[i].checked) selectedItems.push(items[i]);
  }

  var container = items[items.length - 1].parentElement.parentElement;
  var errorElement = container.querySelector(".error-message");

  if (selectedItems.length < minCount) {
    if (!errorElement) {
      errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      errorElement.textContent = errorMessage;
      container.appendChild(errorElement);
    }
  } else {
    if (errorElement) errorElement.remove();
  }
}

function validateCheckBox(items) {
  validateSelection(items, 2, "Please Select at least 2 sports");
}

function validateGender(gender) {
  validateSelection(gender, 1, "Please Select Your gender");
}
function validateCountry(country) {
  validateSelection(country.children, 1, "Please Select Your Country");
}

// My Code
/*
function validateCheckBox(items) {
  var checkedBox = [];
  for (let i = 0; i < items.length; i++) 
    if (items[i].checked) checkedBox.push(items[i].checked)
      
      var container = items[items.length - 1].parentElement.parentElement;
      var errorElement = container.lastChild;
      if (checkedBox.length < 2) {
        if (errorElement.tagName !== "P") {
          errorElement = document.createElement("p");
          errorElement.classList.add("error-message");
          container.append(errorElement);
          errorElement.textContent = "Please Select at least 2 sports";
        }
      }else{
        if (errorElement.tagName === "P") {
          errorElement.remove();
        }
      }
}



function validateGender(gender) {
  var container = gender[gender.length - 1].parentElement.parentElement;
  var errorElement = container.lastChild;

  if (!gender[0].checked && !gender[gender.length - 1].checked) {

    if (errorElement.tagName !== "P") {
      errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      container.append(errorElement);
      errorElement.textContent = "Please Select Your gender";
    }

  }else{
    if (errorElement.tagName === "P") {
      errorElement.remove();
    }
  }
 
}


*/

function validateInput(input, validationFn) {
  var errorMessage = validationFn(input.value);
  var errorElement = input.nextElementSibling;
  if (errorMessage) {
    if (
      !errorElement ||
      !errorElement.classList.contains("error-message") ||
      !errorElement.tagName === "P"
    ) {
      errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      input.after(errorElement);
    }
    errorElement.textContent = errorMessage;
    input.classList.add("input-error");
  } else {
    if (errorElement.tagName === "P") {
      errorElement.remove();
      input.classList.remove("input-error");
    }
  }
}

function validateName(name) {
  var regExp = /^[a-zA-z]/g;
  if (name.length === 0) return "Full Name is required";
  else if (name.length <= 2) return "Full Name must greater than 2 character";
  else if (!regExp.test(name)) return "Use Characters only";
  return "";
}

function validateEmail(email) {
  var regExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  if (email.length === 0) return "Email is required";
  else if (!regExp.test(email)) return "Email is not valid";
  return "";
}

function validatePassword(pass) {
  var regExp =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
  if (pass.length === 0) return "Email is required";
  else if (pass.length < 8) return "Password must be 8 chars at least";
  else if (!regExp.test(pass)) return "Password is not strong";
}

