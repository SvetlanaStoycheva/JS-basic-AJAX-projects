const URL = 'https://api.chucknorris.io/jokes/random';

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

btn.addEventListener('click', async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
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
