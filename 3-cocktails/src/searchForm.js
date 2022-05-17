//we can use a module not only with import/export default but when we simply import the whole module like:
//import './searchForm.js';

import get from '../src/getElement.js';
import presentDinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', (e) => {
  e.preventDefault();

  if (input.value) {
    presentDinks(`${baseURL}${input.value}`);
  } else return;
});
