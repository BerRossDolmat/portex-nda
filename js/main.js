$( document ).ready(function(){
  $(".button-collapse").sideNav();
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('.my-slider').unslider({
    keys: false,
    arrows: false,
    nav: false,
    autoplay: true,
    infinite: true
  });
});

var ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.animate-fadein', {
  origin   : 'bottom',
  distance : '300px',
  duration : 1000,
  delay    : 200,
});
