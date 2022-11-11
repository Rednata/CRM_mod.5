// Здесь можно оставить form.discount_descript,
// form.count.value, form.count.count ?
// Или как лучше найти эти элементы?

import { createRow } from './render.js';

import { closeModal } from './controlModal.js';
import { addGoodInArray } from './functionCommon.js';

import { getSumTable } from './functionTable.js';

const isDiscountChecked = (form, target) => {
  if (target.checked) {
    form.discount_descript.disabled = false;
  } else {
    form.discount_descript.disabled = true;
    form.discount_descript.value = '';
  }
};

const getModalSum = (price, count, form) => {
  form.querySelector('.footer__sum-cash').textContent = price * (count || 0);
};

const changeForm = (form) => {
  form.addEventListener('change', ({ target }) => {
    if (target.classList.contains('discount__checkbox')) {
      isDiscountChecked(form, target);
    }

    if (target.classList.contains('item__input_count')) {
      getModalSum(target.value, form.price.value, form);
    }
    if (target.classList.contains('item__input_price')) {
      getModalSum(target.value, form.count.value, form);
    }
  });
};

const submitForm = (form, goods) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const target = e.target;
    const formData = new FormData(target);
    const newGood = Object.fromEntries(formData);

    createRow(newGood);
    addGoodInArray(newGood, goods);
    getSumTable(goods);
    form.reset();
    closeModal();
  });
};

export {changeForm, submitForm};
