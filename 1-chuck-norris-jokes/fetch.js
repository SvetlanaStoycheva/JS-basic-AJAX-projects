const URL = 'https://api.chucknorris.io/jokes/random';

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function displayData({ value: joke }) {
  // const { value: joke } = data;
  content.textContent = joke;
  img.classList.add('shake-img');
  const random = Math.random() * 1000;
  setInterval(() => {
    img.classList.remove('shake-img');
  }, random);
}
