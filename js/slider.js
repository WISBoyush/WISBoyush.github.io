window.addEventListener('load', () => {
  // buttons
  const left = document.querySelector('.btn-left');
  const right = document.querySelector('.btn-right');
  
  // slider
  const slider = document.querySelector('.slider__container-slides');
  const images = document.querySelectorAll('.slider__container-slides img');

  // counter
  let counter = 0
  const image_width = images[0].clientWidth;

  slider.style.transform = `translateX(${-image_width * counter}px)`;

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