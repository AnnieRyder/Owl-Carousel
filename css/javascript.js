var slideIndex = 1;
showSlides(slideIndex);

// Avança ou volta uma slide
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Define a slide atual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função principal para exibir as slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("line fade");

}
