
// =========================== DOM ELEMENTS =========================== //
// global 
const form = document.querySelector("#subscribe"); // __ form __ //
const modalbg = document.querySelector(".bground"); // __ bg form __ //
const modalBtn = document.querySelectorAll(".modal-btn"); // __ subscribe btn __ //
const formData = document.querySelectorAll(".formData"); // __ div > inputs __ //
const cross = document.querySelectorAll('.close'); // __ modal > cross __ //

// form elements
const firstName = document.querySelector('#first'); // __ input prenom __ //
const lastName = document.querySelector('#last'); // __ input nom __ //
const email = document.querySelector('#email'); // __ input email __ //

// setting form elements 
let setting = {
  firstName: {
    data: '',
    status: false
 },
 lastName: {
    data: '',
    status: false
 },
 email: {
    data: '',
    status: false
 },
 date: {
    data: '',
    status: false
 },
 contest: {
    data: '',
    status: false
 },
 city: {
    data: '',
    status: false
 },
 cgu: {
    status: false
 },
 newsletter: {
    status: false
 }
}

// =========================== FUNCTIONS =========================== //
// Responsive function
function editNav() {
  var i = document.getElementById("myTopnav");
  if (i.className === "topnav") {
    i.className += " responsive";
  } else {
    i.className = "topnav";
  }
}

// Check first name function
const checkInputFirstName = () => {
  if (firstName.value.length > 2) {
     setting.firstName.data = firstName.value;
     setting.firstName.status = true;
     firstName.parentNode.setAttribute("data-error-visible", "false");
  } else {
     setting.firstName.data = firstName.value;
     setting.firstName.status = false;
     firstName.parentNode.setAttribute("data-error-visible", "true");
  }
}
firstName.addEventListener('input', checkInputFirstName);

// Check last name function
const checkInputLastName = () => {
  if (lastName.value.length > 2) {
     setting.lastName.data = lastName.value;
     setting.lastName.status = true;
     lastName.parentNode.setAttribute("data-error-visible", "false");
  } else {
     setting.lastName.data = lastName.value;
     setting.lastName.status = false;
     lastName.parentNode.setAttribute("data-error-visible", "true");
  }
}
lastName.addEventListener('input', checkInputLastName);

// Check email function
const checkInputEmail = () => {
  if (email.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
     setting.email.data = email.value;
     setting.email.status = true;
     email.parentNode.setAttribute("data-error-visible", "false");
  } else {
     setting.email.data = email.value;
     setting.email.status = false;
     email.parentNode.setAttribute("data-error-visible", "true");
  }
}
email.addEventListener('input', checkInputEmail);

// Check champ d'apres function
const check? = () => {

}

// confirmation envoi

// =========================== EVENTS =========================== //
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form cross btn
const closeModal = () => {
  modalbg.style.display = "none";
}

// close modal event
cross.forEach((span) => {
  span.addEventListener("click", closeModal);
})
