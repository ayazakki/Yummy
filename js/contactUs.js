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
    } else {
      submitBtn.setAttribute("disabled");
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
      regex = /^(\+20\s?)?01[0125][0-9]{4}[-.\s]?[0-9]{4}$/;
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
nameInput.addEventListener("blur",function(){
  if(nameInput.value==""){
    document.querySelector("#alertName").classList.replace("d-flex","d-none")
  }else if(validation(nameInput)){
    document.querySelector("#alertName").classList.replace("d-flex","d-none")
  }else{
    document.querySelector("#alertName").classList.replace("d-none","d-flex")
    document.querySelector("#alertName").innerHTML=`
    <p class="mb-0"> username must be at least 3 characters long!</p>
    `
  }
  updateSubmitButton();
})
emailInput.addEventListener("blur",function(){
  if(emailInput.value==""){
    document.querySelector("#alertEmail").classList.replace("d-flex","d-none")
  }else if(validation(emailInput)){
    document.querySelector("#alertEmail").classList.replace("d-flex","d-none")
  }else{
    document.querySelector("#alertEmail").classList.replace("d-none","d-flex")
    document.querySelector("#alertEmail").innerHTML=`
    <p class="mb-0"> A standard email address format with a local part, @ symbol, domain, and top-level domain! like: user@domain.com</p>
    `
  }
  updateSubmitButton();
})
phoneInput.addEventListener("blur",function(){
  if(phoneInput.value==""){
    document.querySelector("#alertPhone").classList.replace("d-flex","d-none")
  }else if(validation(phoneInput)){
    document.querySelector("#alertPhone").classList.replace("d-flex","d-none")
  }else{
    document.querySelector("#alertPhone").classList.replace("d-none","d-flex")
    document.querySelector("#alertPhone").innerHTML=`
    <p class="mb-0"> Please enter a valid Egyptian mobile number (e.g., 01012345678).</p>
    `
  }
  updateSubmitButton();
})
ageInput.addEventListener("blur",function(){
  if(ageInput.value==""){
    document.querySelector("#alertAge").classList.replace("d-flex","d-none")
  }else if(validation(ageInput)){
    document.querySelector("#alertAge").classList.replace("d-flex","d-none")
  }else{
    document.querySelector("#alertAge").classList.replace("d-none","d-flex")
    document.querySelector("#alertAge").innerHTML=`
    <p class="mb-0"> Please enter a valid age between 1 and 99</p>
    `
  }
  updateSubmitButton();
})
passwordInput.addEventListener("blur",function(){
  if(passwordInput.value==""){
    document.querySelector("#alertPassword").classList.replace("d-flex","d-none")
  }else if(validation(passwordInput)){
    document.querySelector("#alertPassword").classList.replace("d-flex","d-none")
  }else{
    document.querySelector("#alertPassword").classList.replace("d-none","d-flex")
    document.querySelector("#alertPassword").innerHTML=`
    <ul class="mb-0 list-unstyled">Minimum length: 8 characters. Must include:
      <p class="ms-1 mt-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 lowercase letter.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 uppercase letter.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 number.</p>
      <p class="ms-1"><i class="fa-solid fa-circle-check me-2"></i>At least 1 special character from !@#$%^&*.</p>
    </ul>
    `
  }
  updateSubmitButton();
})
repasswordInput.addEventListener("blur",function(){
  if(passwordInput.value!==repasswordInput.value){
    document.querySelector("#alertRepassword").innerHTML=`
    <p class="mb-0"> Please enter the same password you have entered before</p>
    `
    document.querySelector("#alertRepassword").classList.replace("d-none","d-flex")
  }else{
    document.querySelector("#alertRepassword").classList.replace("d-flex","d-none")
  }
  updateSubmitButton();
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
  if(passwordInput.value!==repasswordInput.value){
    document.querySelector("#alertRepassword").innerHTML=`
    <p class="mb-0"> Please enter the same password you have entered before</p>
    `
    document.querySelector("#alertRepassword").classList.replace("d-none","d-flex")
  }else{
    document.querySelector("#alertRepassword").classList.replace("d-flex","d-none")
  }
  updateSubmitButton();
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
});





