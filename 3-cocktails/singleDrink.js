import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html');
  } else {
    let drink = await fetchDrinks(`${URL}${id}`);
    drink = drink.drinks[0];
    // console.log(drink);
    displayDrink(drink);
  }
};
window.addEventListener('DOMContentLoaded', presentDrink);
