// Появление меню
let nav = document.querySelector('.icon-menu');

nav.addEventListener('click', function (e) {

  //получаю список с сылками
  let navList = document.querySelector('.menu__list');

  // изначально менее 700 скрыт, показываем
  navList.classList.toggle('_active');

  // у боди блокируем скролл
  let bodyElement = document.body;
  bodyElement.classList.toggle('_hidden')
});

//переход к разделам меню
const menuBut = document.querySelectorAll('.menu__link[data-goto]');
if (menuBut.length > 0) {
  for (let i = 0; i < menuBut.length; i++) {
    const but = menuBut[i];
    but.addEventListener('click', menuClick);
  };


  function menuClick(e) {
    const button = e.target;
    if (button.dataset.goto && document.querySelector(button.dataset.goto)) {
      const block = document.querySelector(button.dataset.goto);
      const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset;


      let navList = document.querySelector('.menu__list');
      navList.classList.toggle('_active');

      let bodyElement = document.body;
      bodyElement.classList.remove('_hidden')

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}


// слайдер range one
const slider = document.getElementById('slider-one');

if (slider) {
  noUiSlider.create(slider, {
    start: [65000],
    connect: 'lower',
    tooltips: wNumb({
      thousand: ' ',
      suffix: ' ₽',
      decimals: 0
    }),
    step: 500,
    range: {
      'min': 1000,
      'max': 100000
    }
  });

  let toTakeSum = document.querySelector('#toTake');

  slider.noUiSlider.on('update', function (values, handle) {

    let num = values[handle];

    let thousand = Math.floor(num / 1000);

    let hundred = Math.floor((num / 100) % 10);

    let ten = Math.floor((num / 10) % 10);

    let unit = Math.floor(num % 10);

    let summ = (thousand + " " + hundred + ten + unit + " ₽");
    toTakeSum.innerHTML = summ;
  });
}

// слайдер range two
const sliderTwo = document.getElementById('slider-two');

noUiSlider.create(sliderTwo, {
  start: [8],
  connect: 'lower',
  tooltips: wNumb({
    thousand: ' ',
    suffix: ' дней',
    decimals: 0
  }),
  behaviour: 'tap',
  step: 1,
  range: {
    'min': 3,
    'max': 30
  },
});



// spoller

const spollerTitles = document.querySelectorAll('[data-spoller]');

if (spollerTitles.length > 0) {

  spollerTitles.forEach(spollerTitle => {

    if (!spollerTitle.parentElement.classList.contains('_active')) {
      spollerTitle.nextElementSibling.hidden = true;
    }
    spollerTitle.addEventListener('click', function (e) {

      if (this.parentElement.hasAttribute('data-one-spoller')) {

        if (!spollerTitle.parentElement.classList.contains('_active')) {
          const titleActive = document.querySelector('[data-one-spoller]._active');
          if (titleActive) {
            titleActive.classList.remove('_active');
            slideUp(titleActive.lastElementChild, 500);
            spollerTitle.parentElement.classList.add('_active');
            slideDown(spollerTitle.nextElementSibling, 500);
          }
        }
      } else {
        spollerTitle.parentElement.classList.toggle('_active');
        slideToggle(spollerTitle.nextElementSibling, 500);
      }
    })
  });
}

// скрывает объект
let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

// показывает обект
let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none')
    display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}


let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

