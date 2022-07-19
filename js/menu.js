window.addEventListener('load', () => {
  // open/close buttons
  const open = document.querySelector('.header__menu__icon');
  const close = document.querySelector('.menu__close-btn');

  // menu module 

  const menu = document.querySelector('.menu')

  // open menu
  open.addEventListener('click', () => {
    menu.classList.add('_active');
  })

  // close menu 

  close.addEventListener('click', () => {
    menu.classList.remove('_active');
  })

})