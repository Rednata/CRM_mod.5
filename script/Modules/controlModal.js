import { addID } from './functionCommon.js';

const openModal = (overlay) => overlay.classList.add('is-visible');

const closeModal = () => {
  document.querySelector('.overlay')
      .classList.remove('is-visible');
};

const controlModal = (overlay) => {
  document.querySelector('.features__button')
      .addEventListener('click', () => {
        openModal(overlay);
        addID();
      });

  overlay.addEventListener('click', ({target}) => {
    if (
      target.classList.contains('overlay') ||
      target.closest('.close')) {
      closeModal();
    }
  });
};

export {controlModal, closeModal};
