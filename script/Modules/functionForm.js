import {
  form, discountInput, discountCheckbox,
  itemInputCount, itemInputPrice,
} from './getElements.js';
import { fetchSender } from './fetchLoader.js';

const resetForm = () => {
  const form = document.querySelector('.form');
  form.reset();
};

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

const getModalSumZero = () =>
  form.querySelector('.footer__sum-cash').textContent = '';

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

const submitForm = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const target = e.target;
    const formData = new FormData(target);
    const newGood = Object.fromEntries(formData);

    fetchSender(newGood);
  });
};

export {changeForm, submitForm, resetForm, getModalSumZero};
