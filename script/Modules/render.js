import { tableBody, vendorCodeId } from './getElements.js';
import { getSumProperty } from './functionCommon.js';

const createRow = (item) => {
  const {
    id = vendorCodeId.textContent,
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
      `<td id="product-id">${id}</td>
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

//  Сокращенный вариант:
const renderGoods = (goods) => goods.forEach(createRow);

// const renderGoods = (goods) => {
//   goods.forEach(item => {
//     createRow(item);
//   });
// };

export {renderGoods, createRow};
 