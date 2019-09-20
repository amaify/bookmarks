//CODE FOR SWITCHING TABS

function openTabs(e, tabNum) {
  var i, tabLinks, tabContent;

  tabContent = document.querySelectorAll(".features__elements");
  tabLinks = document.querySelectorAll(".features__nav--link");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabNum).style.display = "flex";
  e.currentTarget.classList += " active";
}

function tabOne() {
  document.getElementById("one").click();
}

window.onload = tabOne();
//END OF CODE FOR SWITCHING TABS

//CODE FOR DROPDOWN
var questions = document.querySelectorAll(".faq__question");
var answers = document.querySelectorAll(".faq__question--answer");

questions.forEach(function(question, index) {
  question.addEventListener("click", function() {
    if (index === 0) {
      answers[0].classList.toggle("show");
    }

    if (index === 1) {
      answers[1].classList.toggle("show");
    }

    if (index === 2) {
      answers[2].classList.toggle("show");
    }

    if (index === 3) {
      answers[3].classList.toggle("show");
    }
  });
});

var svgs = document.querySelectorAll(".faq__svg");
var question = document.querySelectorAll(".faq__question");

question.forEach(function(quest, index) {
  var newSvg = `
    <use xlink:href="./images/sprite.svg#icon-angle-up" class="icon__two"></use>
  `;

  var oldSvg = `
    <use xlink:href="./images/sprite.svg#icon-angle-down" class="faq__svg--icon"></use>
  `;

  if (index === 0) {
    quest.addEventListener("click", function() {
      if (svgs[0].innerHTML === newSvg) {
        svgs[0].innerHTML = oldSvg;
      } else {
        svgs[0].innerHTML = newSvg;
      }
    });
  }

  if (index === 1) {
    quest.addEventListener("click", function() {
      if (svgs[1].innerHTML === newSvg) {
        svgs[1].innerHTML = oldSvg;
      } else {
        svgs[1].innerHTML = newSvg;
      }
    });
  }

  if (index === 2) {
    quest.addEventListener("click", function() {
      if (svgs[2].innerHTML === newSvg) {
        svgs[2].innerHTML = oldSvg;
      } else {
        svgs[2].innerHTML = newSvg;
      }
    });
  }

  if (index === 3) {
    quest.addEventListener("click", function() {
      if (svgs[3].innerHTML === newSvg) {
        svgs[3].innerHTML = oldSvg;
      } else {
        svgs[3].innerHTML = newSvg;
      }
    });
  }
});
//END OF CODE FOR DROPDOWN

//CODE FOR ADDING AN ACTIVE STATE TO THE NAVIGATION ITEMS
var nav__links = document.querySelectorAll(".main-nav__links");

function navToggle(e) {
  for (var i = 0; i < nav__links.length; i++) {
    nav__links[i].className = nav__links[i].className.replace(
      " nav__active",
      ""
    );
  }
  e.currentTarget.classList += " nav__active";
}

nav__links.forEach(function(nav) {
  nav.addEventListener("click", navToggle);
});

var cta = document.querySelector(".main-nav__links--cta");

function navCta(e) {
  cta.className = cta.className.replace(" nav__cta", "");
  e.currentTarget.className += " nav__cta";
}
cta.addEventListener("click", navCta);
//END OF CODE FOR ADDING AN ACTIVE STATE TO THE NAVIGATION ITEMS

//CODE FOR ADDING FORM VALIDATION
var inputField = document.getElementById("email");
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
  if (inputField.value === "") {
    document.querySelector(".footer__form--alert").innerHTML =
      "Form field can not be empty!";
    valideateInput();
  } else {
    inputField.value = "";
  }
  e.preventDefault();
});

inputField.addEventListener("blur", valideateInput);

function valideateInput() {
  var email = document.getElementById("email");
  var alert = document.querySelector(".footer__form--alert");
  var icon = document.querySelector(".footer__form--alert-icon");
  var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    alert.classList.add("is-invalid");
    icon.classList.add("is-invalid");
    email.classList.add("is-invalid2");
  } else {
    alert.classList.remove("is-invalid");
    icon.classList.remove("is-invalid");
    email.classList.remove("is-invalid2");
  }
}
//END OF CODE FOR ADDING FORM VALIDATION

//CODE FOR OPENING AND CLOSING THE MOBILE NAVIGATION
var ham = document.querySelector(".hamburger__menu");
var mobileNav = document.querySelector(".mobile__nav");
var closeMobileNav = document.querySelector(".mobile__nav--close");

ham.addEventListener("click", function() {
  mobileNav.style.transform = "translateX(0)";
  ham.style.display = "none";
});

closeMobileNav.addEventListener("click", function() {
  var x = window.matchMedia("(min-width: 50rem)");
  mobileNav.style.transform = "translateX(100%)";
  if (!x.matches) {
    ham.style.display = "block";
  } else {
    ham.style.display = "none";
  }
});
//END OF CODE FOR OPENING AND CLOSING THE MOBILE NAVIGATION
