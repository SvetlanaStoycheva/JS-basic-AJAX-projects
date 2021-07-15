import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

async function presentDrinks(url) {
  const data = await fetchDrinks(url);
  console.log(data);

  const section = await displayDrinks(data.drinks);
}

export default presentDrinks;
