
// Появление меню
let nav = document.querySelector('.icon-menu');

nav.addEventListener('click', function (e) {
  let navList = document.querySelector('.menu');
  navList.classList.toggle('_active');

  let bodyElement = document.body;
  bodyElement.classList.toggle('_hidden')
});


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

      let navList = document.querySelector('.menu');
      navList.classList.toggle('_active');

      let bodyElement = document.body;
      if (bodyElement.classList.contains('_hidden')) {
        bodyElement.classList.remove('_hidden')
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

const menuButFooter = document.querySelectorAll('.footer__menu-link[data-goto]');
if (menuButFooter.length > 0) {
  for (let i = 0; i < menuButFooter.length; i++) {
    const butFooter = menuButFooter[i];
    butFooter.addEventListener('click', menuClickFooter);
  };


  function menuClickFooter(e) {
    const buttonFooter = e.target;
    if (buttonFooter.dataset.goto && document.querySelector(buttonFooter.dataset.goto)) {
      const blockFooter = document.querySelector(buttonFooter.dataset.goto);
      const gotoBlockValueFooter = blockFooter.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: gotoBlockValueFooter,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}


//cwiper

new Swiper('.swiper', {
  //стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },


  //НАВИГАЦИЯ
  // 1  булеты, текущее положение
  pagination: {
    el: '.swiper-pagination',

    //* булеты
    type: 'bullets',
    //*переключать нажатием на булеты
    clickable: true,
    //* динамические булеты. Самая большая по середине выбранная
    dynamicBullets: true
  },

  // 4 Скролл
  scrollbar: {
    el: '.swiper-scrollbar',
    // *возможность перетаскивать скролл
    draggable: true,
  },


  // * включение/отключение
  //*перетаскивание на пк мышью  / false - запрещено
  simulateTouch: true,

  // *чувствительность к перетаскиванию от 0 до 1 / 0  - запретить
  touchRatio: 1,

  //*угол срабатывания свайпа/перетаскивания на сенсорном устройстве
  touchAngle: 180,

  //*курсор перетаскивания при наведении на слайд выглядит как рука 
  grabCursor: true,


  //* управление клавиатурой
  keyboard: {
    //* включает или нет впринципе возможность управления клавиатурой
    enabled: true,
    //* слайдер листается с помощью стрелок клавиатуры только в пределах видимости / когда до него доскролили кнопками 9 и 6
    // onlyInViewport: true,
    // * переключение слайдов стрелочками вправо / влево
    pageUpDown: true,
  },

  //* Автовысота / булеты  будут подниматься, если высота картинки становится выше
  autoHeight: true,

  //* количество пролистываемых слайдов
  slidesPerGroup: 1,

  //* бесконечный слайдер 
  loop: true,
});


//form

// получаем форму по имени
const mainForm = document.forms.main;

// получаем все поля с дата атрибутом data-focus
const focus = document.querySelectorAll('.form__input[data-focus]');
if (focus.length > 0) {
  for (let i = 0; i < focus.length; i++) {
    const inputNum = focus[i];
    const inputPlasceholder = inputNum.placeholder;
    inputNum.addEventListener('focus', function (e) {
      inputNum.placeholder = "";
    });
    inputNum.addEventListener('blur', function (e) {
      inputNum.placeholder = inputPlasceholder;
    });
  };
}


const fcheck = mainForm.form__check;
const fname = mainForm.form__name;
const ftel = mainForm.form__tel;
const ftext = mainForm.form__text;

const fError = document.querySelector('.error');


mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = fname.value;
  let tel = ftel.value;
  let text = ftext.value;
  let file = "";

  if (name == "" || tel == "" || text == "") {
    file = "Заполните все поля";
  } else if (name.length <= 1) {
    file = "Введите корректное имя";
  } else if (tel.length <= 10) {
    file = "Номер телефона в формате: 8(904)0981973";
  } else if (text.length <= 10) {
    file = "Недостаточно символов";
  } else if (fcheck.checked == false) {
    file = "Заполните все поля";
  }

  if (file != "") {
    fError.innerHTML = file;
  }
  else {
    window.location = 'https://translate.yandex.ru/?lang=en-ru&text=autocomplete';

  }

});


