import { closeForm } from './controlModal.js';

import {createRow} from './render.js';

import { getSumInTable } from './calculate.js';

const form = document.querySelector('.form');
const modalSum = document.querySelector('.footer__sum-cash');

const addGoods = (good, id, goods) => {
  good.id = id;
  good.sum = good.price * good.count;
  goods.push(good);
};

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

export const functionForm = (vendorCodeID, goods, tableBody, overlay, sumInTable) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const id = vendorCodeID.textContent;
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);

    addGoods(newGood, id, goods);
    createRow(newGood, tableBody);
    getSumInTable(goods, sumInTable);

    form.reset();
    modalSum.textContent = '';
    closeForm(overlay);
  });
};
