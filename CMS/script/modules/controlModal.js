import { randomID } from './calculate.js';

const closeForm = (overlay) => {  
  overlay.classList.remove('is-visible');
};

const clickEventAddGoodButton = (vendorCodeID, addGoodButton, overlay) => {
  addGoodButton.addEventListener('click', e => {
    overlay.classList.add('is-visible');
    const id = randomID();
    vendorCodeID.textContent = id;
  });
};

const clickEventOverlay = (overlay) => {
  overlay.addEventListener('click', e => {
    if (e.target.classList.contains('overlay') ||
      e.target.closest('.close')) {
      closeForm(overlay);
    }
  });
};


export {
  closeForm,
  clickEventAddGoodButton,
  clickEventOverlay,
};

