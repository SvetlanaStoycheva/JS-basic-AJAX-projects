import { showLoading } from './toggleLoading.js';
import { hideLoading } from './toggleLoading.js';

async function fetchDrinks(url) {
  try {
    showLoading();
    const response = await fetch(url);
    const data = await response.json();
    hideLoading();
    return data;
  } catch (error) {
    console.log(error);
    hideLoading();
  }
}

export default fetchDrinks;
