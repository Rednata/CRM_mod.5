import { overlay, featuresButton, form } from './getElements.js';

const openModal = () => overlay.classList.add('is-visible');
const closeModal = () => overlay.classList.remove('is-visible');

const onfeaturesButtonClick = () => {
  featuresButton.addEventListener('click', () => {
    openModal();
  });
};

const onOverlayClick = () => {
  overlay.addEventListener('click', ({target}) => {
    if (
      target.classList.contains('overlay') ||
      target.closest('.close')) {
      closeModal();
      form.reset();
    }
  });
};

export {closeModal, onfeaturesButtonClick, onOverlayClick};

