import { createSidebar } from "./commonSidebar.js";
$(document).ready(function () {
  createSidebar()
});
var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var phoneInput = document.querySelector("#phoneInput");
var ageInput = document.querySelector("#ageInput");
var passwordInput = document.querySelector("#passwordInput");
var repasswordInput = document.querySelector("#repasswordInput");
var submitBtn = document.querySelector("#submitBtn");
var form = document.querySelector("form");

function updateSubmitButton() {
    const isValid =
      validation(nameInput) &&
      validation(emailInput) &&
      validation(phoneInput) &&
      validation(ageInput) &&
      validation(passwordInput) &&
      passwordInput.value === repasswordInput.value;
    if (isValid) {
      submitBtn.removeAttribute("disabled");
      submitBtn.classList.replace("btn-outline-danger","btn-danger")
      
    } else {
      submitBtn.setAttribute("disabled","disabled");
      submitBtn.classList.replace("btn-danger","btn-outline-danger")
    }
  }

function validation(fieldInput) {
  var regex;
  switch (fieldInput) {
    case nameInput:
      regex = /^\w{3,}(\s*-*\w+)*$/;
      break;
    case emailInput:
      regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      break;
    case phoneInput:
      regex = /^(?:0(?:10|11|12|15)\d{8}|\+20(?:10|11|12|15)\d{8})$/;
      break;
    case ageInput:
      regex = /^(?:[1-9]|[1-9][0-9])$/;
      break;
    case passwordInput:
      regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
      break;
    default:
      console.log("there is something wrong !");
  }
  var testString = fieldInput.value;
  if (testString == "") {
    fieldInput.classList.remove("is-valid", "is-invalid");
  } else if (regex.test(testString)) {
    fieldInput.classList.add("is-valid");
    fieldInput.classList.remove("is-invalid");
    return true;
  } else {
    fieldInput.classList.add("is-invalid");
    fieldInput.classList.remove("is-valid");
    return false;
  }
}
const inputs = [
  {
    element: nameInput,
    alertId: '#alertName',
    message: '<p class="mb-0">Username must be at least 3 characters long!</p>'
  },
  {
    element: emailInput,
    alertId: '#alertEmail',
    message: '<p class="mb-0">Enter a valid email address (e.g., user@domain.com).</p>'
  },
  {
    element: phoneInput,
    alertId: '#alertPhone',
    message: `
      <ul class="mb-0 list-unstyled">
    <p class="ms-1 mt-1">Enter an 11-digit phone number: </p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>0 then 3-digit code (010, 011, 012, 015) then 8 digits (e.g., 0XXXXXXXXXX).</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>+20 then 3-digit code (10, 11, 12, 15) then 8 digits (e.g., +20XXXXXXXXX).</p>
    </ul>`
  },
  {
    element: ageInput,
    alertId: '#alertAge',
    message: '<p class="mb-0">Please enter a valid age between 1 and 99.</p>'
  },
  {
    element: passwordInput,
    alertId: '#alertPassword',
    message: `
    <ul class="mb-0 list-unstyled">Minimum length: 8 characters. Must include:
      <p class="ms-1 mt-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 lowercase letter.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 uppercase letter.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 number.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 special character from !@#$%^&*.</p>
    </ul>`
  }
];
inputs.forEach(({ element, alertId, message }) => {
  if (!element) {
    console.error(`Input element for ${alertId} not found`);
    return;
  }
  element.addEventListener('blur', () => {
    const alertElement = document.querySelector(alertId);
    if (!alertElement) {
      console.error(`Alert element ${alertId} not found`);
      return;
    }
    if (element.value === '') {
      alertElement.classList.replace('d-flex', 'd-none');
    } else if (validation(element)) {
      alertElement.classList.replace('d-flex', 'd-none');
    } else {
      alertElement.classList.replace('d-none', 'd-flex');
      alertElement.innerHTML = message;
    }
  });
});
repasswordInput.addEventListener("blur",function(){

  if(passwordInput.value!==repasswordInput.value){
    document.querySelector("#alertRepassword").innerHTML=`
    <p class="mb-0"> Please enter the same password you have entered before</p>
    `
    document.querySelector("#alertRepassword").classList.replace("d-none","d-flex")
  }else{
    document.querySelector("#alertRepassword").classList.replace("d-flex","d-none")
  }
})
nameInput.addEventListener("input", function () {
  validation(nameInput);
  updateSubmitButton();
});
emailInput.addEventListener("input", function () {
  validation(emailInput);
  updateSubmitButton();
});
phoneInput.addEventListener("input", function () {
  validation(phoneInput);
  updateSubmitButton();
});
ageInput.addEventListener("input", function () {
  validation(ageInput);
  updateSubmitButton();
});
passwordInput.addEventListener("input", function () {
  validation(passwordInput);
  updateSubmitButton();
});

repasswordInput.addEventListener("input", function () {
  if(repasswordInput.value===''){
    repasswordInput.classList.remove("is-valid" ,"is-invalid")
  }
  else if(passwordInput.value!==repasswordInput.value){
    repasswordInput.classList.add("is-invalid")
    repasswordInput.classList.remove("is-valid")
  }else{
    repasswordInput.classList.add("is-valid")
    repasswordInput.classList.remove("is-invalid")
  }
  updateSubmitButton();
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
});





