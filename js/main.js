// Initialization Flickity & Flickity options
// https://flickity.metafizzy.co/
const flktyHero = new Flickity( '.hero-slider', {
  accessibility: true,
  pageDots: true,
  wrapAround: true, 
  setGallerySize: false,
});

const logoSlider = new Flickity( '.logo-slider', {
  accessibility: true,
  pageDots: true,
  wrapAround: true, 
});
//

// Main Menu
const toggleMenu = document.getElementById("toggle");
toggleMenu.onclick = function() {
  toggleMenu.classList.toggle("active");
    document.getElementById("overlay").classList
    const menuOverlay = document.getElementById("overlay");
    menuOverlay.classList.toggle("open");

}
//

// E-mail validation
function validateEmail(email) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}

function validate() {
  const result = $("#validation-message");
  const email = $("#input-email").val();
  result.text("");

  if (validateEmail(email)) {
    result.text("Message sent succesfully!");
    result.css("color", "#53bc54");
  } else {
    result.text("There was an error. Please check the required fields.");
    result.css("color", "#f81010");
    email.css("border", "1 px solid red");
  }
  return false;
}

$("#submit-button").on("click", validate);
//

