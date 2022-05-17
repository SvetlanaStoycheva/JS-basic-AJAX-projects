import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

//singleDrink.js will run when we open drink.html
const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  //if the user visits the page for the first time and navigates directly to drinks.html, in this case localStorage is empty and id is undefined. In tis case we want to bring back the user to index.html.
  if (!id) {
    window.location.replace('index.html');
  }
  const drink = await fetchDrinks(`${baseURL}${id}`);
  displayDrink(drink);
};

window.addEventListener('DOMContentLoaded', presentDrink);
