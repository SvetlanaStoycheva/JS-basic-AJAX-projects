import getElement from './getElement.js';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  img.src = person.personImg;

  //set the start values when we open new user
  value.textContent = person.name;
  title.textContent = 'My name is';
  btns.forEach((btn) => btn.classList.remove('active'));
  btns[0].classList.add('active');

  //when we click one of the buttons, set dynamically the text (using data-lable in html and dataset.lable here); set all buttons 'unactive' and only the clicked one to 'active'
  btns.forEach((btn) => {
    const lable = btn.dataset.lable;
    btn.addEventListener('click', () => {
      title.textContent = `My ${lable} is`;
      value.textContent = person[lable];
      btns.forEach((btn) => btn.classList.remove('active'));
      btn.classList.add('active');
    });
  });
};

export default displayUser;
