import { showLoading } from '../src/toggleLoading.js';
import { hideLoading } from '../src/toggleLoading.js';
import showDrinks from './presentDrinks.js';

const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    hideLoading();
    return data;
  } catch (error) {
    console.log(error);
    showLoading();
  }
};

export default fetchDrinks;
