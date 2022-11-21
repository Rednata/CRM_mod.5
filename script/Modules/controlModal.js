import { addID } from './functionCommon.js';
import { overlay, featuresButton, form } from './getElements.js';

const openModal = () => overlay.classList.add('is-visible');
const closeModal = () => overlay.classList.remove('is-visible');

const onfeaturesButtonClick = () => {
  featuresButton.addEventListener('click', () => {
    openModal();
    addID();
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



// import { addID } from './functionCommon.js';
// import { overlay, featuresButton } from './getElements.js';

// const openModal = () => overlay.classList.add('is-visible');
// const closeModal = () => overlay.classList.remove('is-visible');

// const onfeaturesButtonClick = () => {
//   featuresButton.addEventListener('click', () => {
//     openModal();
//     addID();
// });

// const onOverlayClick = () => {
//     overlay.addEventListener('click', ({ target }) => {
//       if (
//         target.classList.contains('overlay') || target.closest('.close')
//       ) {
//         closeModal();
//       }
//     });
//   };
// };

// export {closeModal};
