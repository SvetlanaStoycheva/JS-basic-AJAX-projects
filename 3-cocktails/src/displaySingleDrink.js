import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();

  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = data;
  let list = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
  ];
  list = list.filter((item) => item !== null);
  //   console.log(data, list);
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;

  //   list.forEach((item) => {
  //     const li = document.createElement('li');
  //     li.textContent = item;
  //     ingredients.appendChild(li);
  //   });
  ingredients.innerHTML = list
    .map((item) => {
      return `<li><i class='far fa-check-square'></i>${item}</li>`;
    })
    .join('');
};
export default displayDrink;
