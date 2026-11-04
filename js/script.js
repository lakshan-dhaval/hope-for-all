const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const supportForm = document.querySelector('#support-form');
const formNote = document.querySelector('#form-note');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navLinks.classList.remove('open');
  });
});

supportForm.addEventListener('submit', (event) => {
  event.preventDefault();
  supportForm.reset();
  formNote.textContent = 'Thank you for your interest in supporting Hope for All.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
