const createRow = (obj, tableBody) => {
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

const renderGoods = (goods, tableBody) => {
  // const renderGoods = (goods) => {
  // goods.map(createRow);
  goods.map(item => {
    createRow(item, tableBody);
  });
};

export {
  createRow,
  renderGoods,
};
