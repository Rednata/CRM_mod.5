// Не могу здесь избавиться от tableBody.
// Можно здесь просто делать импорт getElementsFromPage() 
// и объявлять переменную tableBody?
// Сдеала для createRow по умолчанию  tableBody = document.querySelector('.tbody')// чтобы не передавать доп.параметр из functionForm.js
// Сделала также по умолчанию id = document.querySelector('.vendor-code__id').textContent


import { getSumProperty } from './functionCommon.js';

const createRow = (item, tableBody = document.querySelector('.tbody')) => {
  const {
    id = document.querySelector('.vendor-code__id').textContent,
    title,
    price,
    category,
    count,
    units,
  } = item;

  const row = document.createElement('tr');
  const sum = getSumProperty(price, count);
  item.sum = sum;

  row.insertAdjacentHTML('afterbegin',
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
              <img src="./assets/cart.svg" 
              alt="Корзина для удаления товара" class="td__img">
            </button>
          </td>`);
  tableBody.append(row);
};

const renderGoods = (goods, tableBody) => {
  goods.forEach(item => {
    createRow(item, tableBody);
  });
};

export {renderGoods, createRow};
