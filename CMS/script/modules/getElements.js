export const getElementsfromPage = () => {
  const sumInTable = document.querySelector('.subtitle-cash');
  const tableBody = document.querySelector('.tbody');
  const vendorCodeID = document.querySelector('.vendor-code__id');
  const addGoodButton = document.querySelector('.features__button');
  const overlay = document.querySelector('.overlay');

  return {
    sumInTable,
    tableBody,
    vendorCodeID,
    addGoodButton,
    overlay,
  };
};
