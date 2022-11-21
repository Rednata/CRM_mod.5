import { tableBody, subtitleCash } from './getElements.js';

const getSumTable = (goods) => {
  const totalProductPrice = goods.reduce((acc, elem) => acc += elem.sum, 0);

  subtitleCash.textContent = totalProductPrice;
};

const deleteItem = (goods) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.closest('.td__btn_cart')) {
      const row = target.closest('tr');
      const currentRowId = +row.querySelector('#product-id').textContent;
      // Было:
      // const currentPtoductIndex = goods.findIndex(item => item.id === +currentRowId);
      // Стало:
      const currentPtoductIndex = goods.findIndex(({ id }) =>
        id === +currentRowId);

      goods.splice(currentPtoductIndex, 1);
      row.remove();
    }

    getSumTable(goods);
  });
};

const openNewWin = (url) => {
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const newWin = window.open(url, '', 'width=600,height=600');

  newWin.moveTo((screenWidth / 2 - 300), (screenHeight / 2) - 300);
};

const onViewPictureButtonClick = () => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.closest('.td__btn_picture')) {
      const url = target.closest('.td__btn_picture').dataset.pic;
      openNewWin(url);
    }
  });
};

export { getSumTable, deleteItem, onViewPictureButtonClick };
