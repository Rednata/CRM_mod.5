import {getSumInTable} from './calculate.js';

const deleteTR = (target) => {
  target.remove();
};

const deleteItemObj = (target, tableBody, goods, sumInTable) => {  
  const itemID = (target.textContent).slice(0, 9);
  const indexElemID = goods.findIndex(elem => elem.id === Number(itemID));
  goods.splice(indexElemID, 1);
  getSumInTable(goods, sumInTable);
};

export const deleteItem = (goods, tableBody, sumInTable) => {  
  tableBody.addEventListener('click', e => {
    if (e.target.closest('.td__btn_cart')) {
      const tableTR = e.target.closest('.tr');
      deleteTR(tableTR);
      deleteItemObj(tableTR, tableBody, goods, sumInTable);
    }
  });
};

