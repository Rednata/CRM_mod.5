const tableBody = document.querySelector('.tbody');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');
const discountInput = form.querySelector('.discount__input');
const discountCheckbox = form.querySelector('.discount__checkbox');
const itemInputCount = form.querySelector('.item__input_count');
const itemInputPrice = form.querySelector('.item__input_price');
const vendorCodeId = document.querySelector('.vendor-code__id');
const subtitleCash = document.querySelector('.subtitle-cash');
const featuresButton = document.querySelector('.features__button');

export { tableBody, overlay, form, discountInput,
  discountCheckbox, itemInputCount, itemInputPrice,
  vendorCodeId, subtitleCash, featuresButton };
