window.addEventListener('load', () => {
  // buttons
  const left = document.querySelector('.btn-left');
  const right = document.querySelector('.btn-right');
  
  // slider
  const slider = document.querySelector('.slider__container-slides');
  const images = document.querySelectorAll('.slider__container-slides img');

  // slider container

  const container = document.querySelector('.wrapper__right-content');
  const slider_content = container.querySelector('.body__slider-content');
  const main_content = document.querySelector('.wrapper__left-content');
  const wrapper = document.querySelector('.wrapper');
  const before_elem = document.querySelector('.header');

  if (window.innerWidth <= 1410) {
  wrapper.removeChild(container);
  before_elem.after(slider_content);
  main_content.style.flexBasis = '100%';
}
  
  
  // counter
  let counter = 0
  const image_width = images[0].clientWidth;



  // container.style.flexBasis = `${image_width}px`;

  // slider.style.transform = `translateX(${-image_width * counter}px)`;

  right.addEventListener('click', () => {
    counter >= images.length - 1? counter = -1: null;
    slider.classList.add('transform-smooth');
    counter++;
    slider.style.transform = `translateX(${-image_width * counter}px)`;
  });
  left.addEventListener('click', () => {
    counter <= 0? counter = images.length: null;
    slider.classList.add('transform-smooth');
    counter--;
    slider.style.transform = `translateX(${-image_width * counter}px)`;
  });
});