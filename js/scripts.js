const toggleMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');

toggleMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('main-menu--show');
  toggleMenu.classList.toggle('toggle-menu--show');
});
