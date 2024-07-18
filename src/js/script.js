//MENU

const menuOpener = document.querySelector('.menu-opener');
let nav = document.querySelector('header nav');

menuOpener.addEventListener('click', menuToggle);

function menuToggle() {
  if (nav.classList.contains('opened')) {
    nav.classList.remove('opened');
    menuOpener.querySelector('.close-icon').style.display = 'none';
    menuOpener.querySelector('.hamburger-icon').style.display = 'flex';
  } else {
    nav.classList.add('opened');
    menuOpener.querySelector('.close-icon').style.display = 'flex';
    menuOpener.querySelector('.hamburger-icon').style.display = 'none';
  }
};

//TESTIMONIALS

let testimonials = [
  { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: 'cbs.svg' },
  { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam."', origin: 'forbes.svg' },
  { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: 'fox.svg' },
  { quote: '"Vejo você [Ricardo] como um verdadeiro héroi."', origin: 'sharktank.svg' }
];

let testimonialQuote = document.querySelector('.testimonials .quote');
let testimonialIcons = document.querySelector('.testimonials .icons');

for (let tindex in testimonials) {
  let img = document.createElement('img');
  img.setAttribute('src', `./assets/${testimonials[parseInt(tindex)].origin}`);
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => fillTestimonial(parseInt(tindex)));
  testimonialIcons.appendChild(img);
};

let currentTestimonial = 0;
let testimonialTimer;

function fillTestimonial(index) {
  clearTimeout(testimonialTimer);
  currentTestimonial = index;
  testimonialQuote.innerHTML = testimonials[currentTestimonial].quote;
  let imgs = testimonialIcons.querySelectorAll('img');

  for (let img of imgs) {
    img.style.opacity = 0.2;
  };

  imgs[currentTestimonial].style.opacity = 1;

  testimonialTimer = setTimeout(nextTestimonial, 3000);
};

function nextTestimonial() {
  if (testimonials[currentTestimonial + 1]) {
    fillTestimonial(currentTestimonial + 1);
  } else {
    fillTestimonial(0);
  }
};

nextTestimonial();

// FAQ

let currentFaq = 0;
let faqItens = document.querySelectorAll('.faq .accordion .item');

faqItens.forEach((el, index) => {
  el.querySelector('.title').addEventListener('click', () => setFaq(index));
});

function setFaq(index) {
  currentFaq = index;

  if (faqItens[currentFaq].classList.contains('opened')) {
    faqItens[currentFaq].classList.remove('opened');
    return;
  };

  for (let item of faqItens) {
    item.classList.remove('opened');
  };

  faqItens[currentFaq].classList.add('opened');
};