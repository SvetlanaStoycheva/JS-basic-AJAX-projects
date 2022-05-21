import displayButtons from './displayButtons.js';
import displayFollowers from './displayFollowers.js';
import fetchFollowers from './fetchFollowers.js';
import paginate from './paginate.js';

const title = document.querySelector('.section-title h1');
const btnsContainer = document.querySelector('.btn-container');

//pages
let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnsContainer, pages, index);
};

//on page load => get the followers data; display followers; change page title to 'pagination'
const init = async () => {
  const followers = await fetchFollowers();
  //displayFollowers(followers);
  //display 9 people per page using paginate
  //displayFollowers(paginate(followers)[0]); //it displays the first page with 9 people
  title.textContent = 'pagination';
  pages = paginate(followers);
  setupUI();
};

btnsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btns-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener('load', init);
