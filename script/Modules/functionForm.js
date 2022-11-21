import {
  form, discountInput, discountCheckbox,
  itemInputCount, itemInputPrice,
} from './getElements.js';
import { createRow } from './render.js';
import { closeModal } from './controlModal.js';
import { addGoodInArray } from './functionCommon.js';
import { getSumTable } from './functionTable.js';

const isDiscountChecked = (target) => {
  if (target.checked) {
    discountInput.disabled = false;
  } else {
    discountInput.disabled = true;
    discountInput.value = '';
  }
};

const getModalSum = (price, count) => {
  form.querySelector('.footer__sum-cash').textContent = (price * count) || 0;
};

const changeForm = () => {
  form.addEventListener('change', ({ target }) => {
    if (target === discountCheckbox) {
      isDiscountChecked(target);
    }

    if (target === itemInputCount) {
      getModalSum(itemInputCount.value, itemInputPrice.value);
    }
    if (target === itemInputPrice) {
      getModalSum(itemInputPrice.value, itemInputCount.value);
    }
  });
};

const submitForm = (goods) => {
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
