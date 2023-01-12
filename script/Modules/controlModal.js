import { overlay, featuresButton, form } from './getElements.js';
import { getModalSumZero, resetForm } from './functionForm.js';

const modalError = document.querySelector('.error');
const errorClose = document.querySelector('.error__close');

const openModal = () => overlay.classList.add('is-visible');
const closeModal = () => overlay.classList.remove('is-visible');
const closeError = () => modalError.classList.remove('error__active');

const onfeaturesButtonClick = () => {
  featuresButton.addEventListener('click', () => {
    openModal();
  });
};

const onOverlayClick = () => {
  overlay.addEventListener('click', ({target}) => {
    if (
      target.classList.contains('overlay') ||
      target.closest('.close__modal')) {
      closeModal();
      closeError();
      getModalSumZero();
      resetForm();
    }
  });
};

const onErrorCloseClick = () => {
  errorClose.addEventListener('click', () => {
    closeError();
  });
};

export {closeModal, onfeaturesButtonClick, onOverlayClick, onErrorCloseClick};

