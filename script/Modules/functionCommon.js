const getSumProperty = (price, count) => price * count;

const getID = () => Math.trunc(Math.random() * 1000000000);

const addID = (id) => {
  document.querySelector('.vendor-code__id').textContent = getID();
};

const addGoodInArray = (newGood, goods) => {
  goods.push(newGood);
};

export {getSumProperty, addID, addGoodInArray};
