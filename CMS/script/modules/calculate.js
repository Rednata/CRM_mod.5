const addSumProperty = (goods) => {
  goods.map(elem => (elem.sum = elem.price * elem.count));
};

const getSumInTable = (goods, sumInTable) => {
  const sum = goods.reduce((acc, elem) => acc + elem.sum, 0);
  return sumInTable.textContent = sum;
};

const randomID = () => Math.trunc(Math.random() * 1000000000);

export {
  addSumProperty,
  getSumInTable,
  randomID,
};
