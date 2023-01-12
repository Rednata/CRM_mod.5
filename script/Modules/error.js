const textErrorInModal = (err) => {
  const modalError = document.querySelector('.error');
  const titleError = document.querySelector('.error__title');
  titleError.textContent = err;
  modalError.classList.add('error__active');
};

export {textErrorInModal};
