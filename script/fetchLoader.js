import { renderGoods } from './modules/render.js';
import { getSumTable } from './modules/functionTable.js';

const url = 'https://determined-painted-hawthorn.glitch.me/api/goods';

const fetchLoader = async () => {
  const response = await fetch(url);
  const goods = await response.json();
  renderGoods(goods);
  getSumTable(goods);
};

const fetchSender = async (good) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: good.title,
      description: good.descript,
      category: good.category,
      price: good.price,
      units: good.units,
      count: good.count,
      discount: good.discount,
    }),
    headers: {'Content-Type': 'application/json'},
  });

  fetchLoader();
};

const fetchDelete = async (goodId) => {
  await fetch(url + `/${goodId}`, {
    method: 'DELETE'});
};

export {fetchLoader, fetchSender, fetchDelete};
