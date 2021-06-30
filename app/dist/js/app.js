const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// gsap
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

/* gsap.from('.animate-yinyang', {
  duration: 1.6,
  opacity: 00,
  x: 250,
  y: 250
}); */

// Yin-Yang - https://codepen.io/lemmin/pen/MWbGjxj
/* var scrubber = document.getElementById('speed');
var yinyang = document.getElementsByClassName('yinyang')[0];
var yin = document.getElementsByClassName('yin')[0];
var yang = document.getElementsByClassName('yang')[0];

scrubber.addEventListener('change', () => {
  var speed = parseInt(scrubber.max) + 1 - scrubber.value;
  var speed_half = speed / 2;

  yinyang.style.animationDuration = speed + 's';
  yin.style.animationDuration = speed_half + 's';
  yang.style.animationDuration = speed_half + 's';
});
 */