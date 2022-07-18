// Mobile Nav Toggle
const mobileBtn = document.querySelector('.mobile-toggle-btn');
const headerNav = document.querySelector('.header');
const navLink = document.querySelector('.link-nav');

mobileBtn.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});

navLink.addEventListener('click', () => {
  headerNav.classList.remove('active');
});
