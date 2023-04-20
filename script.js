const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let slideIndex = 0;

function showSlide(n) {
  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  // Exibe o slide atual
  slides[n].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

// Exibe o primeiro slide
showSlide(slideIndex);

// Inicia o intervalo de 5 segundos
setInterval(() => {
  nextSlide();
}, 20000);

// Adiciona eventos de clique aos botões de navegação
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);






var navbar = document.querySelector('.nav-bar');

// adiciona um listener para detectar a rolagem da página
window.addEventListener('scroll', function() {
  // verifica se a posição vertical da página é maior que 100 pixels
  if (window.pageYOffset > 400) {
    // adiciona a classe "navbar-scrolled" à barra de navegação
    navbar.classList.add('navbar-scrolled');
  } else {
    // remove a classe "navbar-scrolled" da barra de navegação
    navbar.classList.remove('navbar-scrolled');
  }
});