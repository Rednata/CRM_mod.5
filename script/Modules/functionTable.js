const getSumTable = (goods) => {
  document.querySelector('.subtitle-cash').textContent =
    goods.reduce((acc, elem) => acc += elem.sum, 0);
};

const deleteItem = (tableBody, goods) => {
  tableBody.addEventListener('click', ({ target }) => {
    if (target.closest('.td__btn_cart')) {
      const deleteObj = target.closest('tr');
      deleteObj.remove();

      goods.splice(
          goods.findIndex(item =>
            String(item.id) === deleteObj.textContent.slice(0, 9)), 1);
    }

    getSumTable(goods);
  });
};

export {getSumTable, deleteItem};
