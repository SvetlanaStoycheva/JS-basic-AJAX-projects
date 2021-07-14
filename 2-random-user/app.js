import getElement from './utils/getElement.js';
import getUser from './utils/fetchUser.js';

const btn = getElement('.btn');
const img = getElement('.user-img');
const nameEl = getElement('.user-value');
const titleEl = getElement('.user-title');
const iconsEl = document.querySelectorAll('.icon');

window.addEventListener('DOMContentLoaded', displayData);
btn.addEventListener('click', displayData);

async function displayData() {
  const person = await getUser();
  //   console.log(person);
  img.src = person.image;
  nameEl.textContent = person.name;
  iconsEl.forEach((btn) => btn.classList.remove('active'));
  iconsEl[0].classList.add('active');

  iconsEl.forEach((iconEl) => {
    iconEl.addEventListener('click', (e) => {
      const currentLable = e.currentTarget.dataset.lable;
      nameEl.textContent = person[currentLable];
      titleEl.textContent = `My ${currentLable} is`;
      iconsEl.forEach((btn) => btn.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
}
