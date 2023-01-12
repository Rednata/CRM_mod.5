import { renderGoods } from './render.js';
import { getSumTable } from './functionTable.js';
import { closeModal } from './controlModal.js';
import { resetForm } from './functionForm.js';
import { textErrorInModal } from './error.js';

const url = 'https://determined-painted-hawthorn.glitch.me/api/goods';

const fetchLoader = async () => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const goods = await response.json();
      renderGoods(goods);
      getSumTable(goods);
      return;
    }
    throw new Error(response.status);
  } catch (err) {
    const cmsContainer = document.querySelector('.cms__title');
    const h2 = document.createElement('h2');
    h2.style.cssText = 'color: red; fontSize: 30px';
    h2.textContent = 'Ошибка сервера';
    cmsContainer.prepend(h2);
  }
};

const fetchSender = async (good) => {
  try {
    const response = await fetch(url, {
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

    if (response.ok) {
      resetForm();
      fetchLoader();
      closeModal();
      return;
    }

    const responseJSON = await response.json();
    throw new Error(`поле ${responseJSON.errors[0].field}: ${responseJSON.errors[0].message}`);
  }
  catch (err) {
    textErrorInModal(err);
  }
};

const fetchDelete = async (goodId) => {
  await fetch(url + `/${goodId}`, {
    method: 'DELETE'});
};

export {fetchLoader, fetchSender, fetchDelete};
