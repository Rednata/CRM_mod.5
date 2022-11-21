import { vendorCodeId } from './getElements.js';

const getSumProperty = (price, count) => price * count;
const getID = () => Math.trunc(Math.random() * 1000000000);
const addID = () => vendorCodeId.textContent = getID();
const addGoodInArray = (newGood, goods) => goods.push(newGood);

export {
  getSumProperty,
  addID,
  addGoodInArray,
};
