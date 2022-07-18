// Mobile Nav Toggle
const mobileBtn = document.querySelector('.mobile-toggle-btn');
const headerNav = document.querySelector('.header');
const navLink = document.querySelectorAll('.link-nav');

mobileBtn.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove('active');
  };
});
