import get from '../src/getElement.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');

  //when the search doesn't give a result => we set a message and clear the section
  if (!drinks) {
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: img, strDrink: name } = drink;

      return `
      <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${img}" alt="${name}"/>
            <h3>${name}</h3>
          </article>
        </a>
      `;
    })
    .join('');
  //hide loading
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
