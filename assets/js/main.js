// fungsi slideshow di showcase
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;                                   
const slideInterval = 5000;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, slideInterval);


// fungsi tab
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach((item) => item.classList.remove('show'));
}

tabItems.forEach((item) => item.addEventListener('click', selectItem));


// fungsi burger menu
const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.menu a')
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
}

burgerMenu.addEventListener('click', toggleMenu);

menuItems.forEach(e => {
    e.addEventListener('click', toggleMenu)
});