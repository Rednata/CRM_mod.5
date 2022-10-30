'use strict';

const arr = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': `Смартфон Xiaomi 11T – это представитель 
        флагманской линейки, выпущенной во второй половине 2021 года.
        И он полностью соответствует такому позиционированию, предоставляя 
        своим обладателям возможность пользоваться отличными камерами, 
        ни в чем себя не ограничивать при запуске игр и других 
        требовательных приложений.`,
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': `Внедорожник на дистанционном управлении. 
        Скорость 25км/ч. Возраст 7 - 14 лет`,
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': `Всего лишь один шаг сделает ваш телевизор умным, 
        Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, 
        сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D`,
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': `Витая пара Proconnect 01-0043-3-25 является сетевым кабелем
        с 4 парами проводов типа UTP, в качестве проводника в которых 
        используется алюминий, плакированный медью CCA. Такая неэкранированная 
        витая пара с одножильными проводами диаметром 0.50 мм широко 
        применяется в процессе сетевых монтажных работ. С ее помощью вы сможете
        обеспечить развертывание локальной сети в домашних условиях или на
        предприятии, объединить все необходимое вам оборудование в единую
        сеть.`,
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const tableBody = document.querySelector('.tbody');

const createRow = (obj) => {
  const elemTR = document.createElement('tr');

  elemTR.classList.add('tr');

  elemTR.insertAdjacentHTML('beforeend',
      `<td>${obj.id}</td>
    <td>${obj.title}</td>
    <td>${obj.category}</td>
    <td>${obj.units}</td>
    <td>${obj.count}</td>
    <td>${obj.price}</td>
    <td></td>    
    <td><button></button></td>
    <td><button></button></td>
    <td><button class="td__btn td__btn_cart">
          <img src="./assets/cart.svg" alt="" class="td__img">
        </button></td>`,
  );

  tableBody.append(elemTR);
};

const renderGoods = (arr) => {
  arr.map(item => {
    createRow(item);
  });
};

renderGoods(arr);

const addGoodButton = document.querySelector('.features__button');
const visibleCRM = document.querySelector('.overlay');

addGoodButton.addEventListener('click', e => {
  visibleCRM.classList.add('is-visible');
});

visibleCRM.addEventListener('click', e => {
  if (e.target.classList.contains('overlay') ||
    e.target.closest('.close')) {
    visibleCRM.classList.remove('is-visible');
  }
});

// Mod.5_6

const deleteTR = (target) => {
  target.closest('.tr').remove();
  const textID = (target.closest('.tr').textContent).substring(0, 9);
  let count = 1;
  const delElemInArray = arr.findIndex(elem => (String(elem.id) === textID));
  if (delElemInArray === -1) {
    count = 0;
  }

  return [delElemInArray, count];
};

tableBody.addEventListener('click', e => {
  const target = e.target;

  if (target.closest('.td__btn_cart')) {
    const delTR = deleteTR(target);

    const [splice1, splice2] = delTR;

    arr.splice(splice1, splice2);
    console.log(arr);
  }
});


