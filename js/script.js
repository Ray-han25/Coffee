AOS.init({
  duration: 1000,
  delay: 300,
  once: false
});
$('.feedback_silder').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow :'  <button class="prvaaarr sameButton"> <i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow:'<button class="nextaaarr sameButton"> <i class="fa-solid fa-arrow-right"></i></button>'

});