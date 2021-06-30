
// =========================== DOM ELEMENTS =========================== //
// global 
const form = document.querySelector("#subscribe"); // __ form __ //
const modalbg = document.querySelector(".bground"); // __ bg form __ //
const modalBtn = document.querySelectorAll(".modal-btn"); // __ subscribe btn __ //
const formData = document.querySelectorAll(".formData"); // __ div > inputs __ //
const cross = document.querySelectorAll('.close'); // __ modal > cross __ //
const modalbg2 = document.querySelector(".bground2"); // __ bg thanks page __ //
const closeBtn = document.querySelector("#closeBtn"); // __ close btn thanks page __ //

// form elements
const firstName = document.querySelector('#first'); // __ input prenom __ //
const lastName = document.querySelector('#last'); // __ input nom __ //
const email = document.querySelector('#email'); // __ input email __ //
const date = document.querySelector('#birthdate'); // __ input date __ //
const contest = document.querySelector('#quantity'); // input > field "Combien ?" __ //
const city = document.querySelector('#city'); // __ div > locations __ //
const checkBox = document.querySelector("#checkbox1"); // __ CGU  __ //
const checkBox2 = document.querySelector("#checkbox2") // __ newsletter option  __ //
const submitBtn = document.querySelector('#submit'); // __ btn "C'est parti" __ //

let radio1 = document.querySelector('#location1'); // __ New York __ //
let radio2 = document.querySelector('#location2'); // __ San Fransico __ //
let radio3 = document.querySelector('#location3'); // __ Seattle __ //
let radio4 = document.querySelector('#location4'); // __ Chicago __ //
let radio5 = document.querySelector('#location5'); // __ Boston __ //
let  radio6 = document.querySelector('#location6'); // __ Portland __ //

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
// Responsive
const editNav = () => {
   let i = document.getElementById("myTopnav");
   if (i.className === "topnav") {
      i.className += " responsive";
   } else {
      i.className = "topnav";
   }
}

// Check first name
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

// Check last name
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

// Check email
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

// Check birthdate 
const checkInputDate = () => {
   if (date.value == '') {
      state.date.data = date.value;
      date.parentNode.setAttribute("data-error-visible", "true");
   } else {
      state.date.data = creatDate();
      state.date.status = true;
      date.parentNode.setAttribute("data-error-visible", "false");
   }
}
date.addEventListener('input', checkInputDate);

// Check constest enrollment
const checkInputContest = () => {
   if (contest.value == '' || contest.value <= 0 || contest.value > 99) {
      state.contest.data = contest.value;
      state.contest.status = false;
      contest.parentNode.setAttribute("data-error-visible", "true");
   } else {
      state.contest.data = contest.value;
      state.contest.status = true;
      contest.parentNode.setAttribute("data-error-visible", "false");
   }
}
contest.addEventListener('input', checkInputContest);



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
