$( document ).ready(function(){

  // Sidenavigation

  $(".button-collapse").sideNav();

  // Trigger Modals

  $('.modal-trigger').leanModal();

  // Slider configuration

  $(".slider-no-display").removeClass( "slider-no-display" );

  $('.my-slider').unslider({
    keys: false,
    arrows: false,
    nav: false,
    autoplay: true,
    infinite: true
  });

  $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 9,
    controls: false,
    thumbMargin: 20,
    auto: true,
    speed: 500,
    pause: 10000
  });
});

// Scroll Reveal

var ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.animate-fadein', {
  origin   : 'bottom',
  distance : '100px',
  duration : 1000,
  delay    : 200,
  viewOffset  : { top: 64 },
  scale: 0
});

sr.reveal('.contact-us-btn', {
  origin   : 'bottom',
  distance : '300px',
  duration : 1000,
  delay    : 1200,
});

// Toasts

function closeToast() {
  $( ".toast-style" ).hide();
}

var $contactUsMessage = $('<div><h5>Уважаемые коллеги!</h5> <p>Ваша заявка получена, и принята в работу. В ближайшее время (не позднее 24 часов Вы получите ответ или готовое коммерческое предложение. В случае если оно Вас устроит, Вам будет выставлен официальный счет для оплаты.</p><p> С уважением коллектив ООО НДА Деловая медицинская компания</p><div><a href="#!" onclick="closeToast()" class=" modal-action modal-close waves-effect waves-blue btn-flat">Закрыть</a></div></div>');

function contactUsShowMessage() {
  $('#contact-us-modal').closeModal();
  Materialize.toast($contactUsMessage, 20000, 'toast-style grey lighten-5');
}

function newOrderShowMessage() {
  $('#modal-add-order').closeModal();
  Materialize.toast($contactUsMessage, 20000, 'toast-style grey lighten-5');
}

function contactUsTopShowMessage() {
  $('#contactsModal').closeModal();
  Materialize.toast($contactUsMessage, 20000, 'toast-style grey lighten-5');
}

// Validating forms

//Validating email in order modal

var email = document.getElementById("email-order");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Введите Ваш email");
  } else {
    email.setCustomValidity("");
  }
});

// Validate email in contactUsTop

var email = document.getElementById("email");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Введите Ваш email");
  } else {
    email.setCustomValidity("");
  }
});

// Validate email bottom

var email = document.getElementById("email-bottom");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Введите Ваш email");
  } else {
    email.setCustomValidity("");
  }
});
