export const getElementsFromPage = () => {
  const tableBody = document.querySelector('.tbody');
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('.form');

  return {
    tableBody,
    overlay,
    form,
  };
};
