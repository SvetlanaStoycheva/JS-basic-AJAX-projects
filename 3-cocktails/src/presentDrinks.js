import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

async function presentDrinks(url) {
  const data = await fetchDrinks(url);
  // console.log(data);

  const section = await displayDrinks(data.drinks);
  if (section) {
    setDrink(section);
  }
}

export default presentDrinks;
