'use strict';

const goods = [
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

// Прописываю доп.свойство для объекта sum
goods.map(elem => (elem.sum = elem.price * elem.count));

const sumInTable = document.querySelector('.subtitle-cash');

// Нахожу суммы всех элементов массива и записываю это значение в textContent
const countSumInTable = () => {
  const sum = goods.reduce((acc, elem) => acc + elem.sum, 0);

  return sumInTable.textContent = sum;
};

countSumInTable();

const tableBody = document.querySelector('.tbody');

const createRow = (obj) => {
  const {id,
    title,
    category,
    units,
    count,
    price,
    sum,
  } = obj;

  const row = document.createElement('tr');

  row.classList.add('tr');

  row.insertAdjacentHTML('beforeend',
      `<td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td>${units}</td>
    <td>${count}</td>
    <td>${price}</td>
    <td>${sum}</td>    
    <td><button></button></td>
    <td><button></button></td>
    <td>
      <button class="td__btn td__btn_cart">
          <img src="./assets/cart.svg" alt="" class="td__img">
      </button>
    </td>`,
  );

  tableBody.append(row);
};

const renderGoods = (goods) => {
  goods.map(createRow);
};

// const renderGoods = (goods) => {
//   goods.map(item => {
//     createRow(item);
//   });
// };

renderGoods(goods);

const addGoodButton = document.querySelector('.features__button');
const visibleCRM = document.querySelector('.overlay');

const vendorCodeID = document.querySelector('.vendor-code__id');

const closeForm = () => {
  visibleCRM.classList.remove('is-visible');
};

const randomID = () => Math.trunc(Math.random() * 1000000000);

addGoodButton.addEventListener('click', e => {
  visibleCRM.classList.add('is-visible');
  const id = randomID();
  vendorCodeID.textContent = id;
});

visibleCRM.addEventListener('click', e => {
  if (e.target.classList.contains('overlay') ||
    e.target.closest('.close')) {
    closeForm();
  }
});

const deleteTR = (target) => {
  target.remove();
};

const deleteItemObj = (target) => {
  const itemID = (target.textContent).slice(0, 9);
  const indexElemID = goods.findIndex(elem => elem.id === Number(itemID));
  goods.splice(indexElemID, 1);
  countSumInTable();
};

tableBody.addEventListener('click', e => {
  if (e.target.closest('.td__btn_cart')) {
    const tableTR = e.target.closest('.tr');
    deleteTR(tableTR);
    deleteItemObj(tableTR);
  }
});

const addGoods = (good, id) => {
  good.id = id;
  good.sum = good.price * good.count;
  goods.push(good);
};

const form = document.querySelector('.form');
const modalSum = document.querySelector('.footer__sum-cash');

form.count.addEventListener('change', e => {
  modalSum.textContent = e.target.value * (form.price.value || 0);
});

form.price.addEventListener('change', e => {
  modalSum.textContent = e.target.value * (form.count.value || 0);
});

form.discount.addEventListener('change', e => {
  if (e.target.checked) {
    form.discount_descript.disabled = false;
  } else {
    form.discount_descript.value = '';
    form.discount_descript.disabled = true;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const id = vendorCodeID.textContent;

  const formData = new FormData(e.target);
  const newGood = Object.fromEntries(formData);

  addGoods(newGood, id);
  createRow(newGood);

  countSumInTable();

  form.reset();
  modalSum.textContent = '';
  closeForm();
});


