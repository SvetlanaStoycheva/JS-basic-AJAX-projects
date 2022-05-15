import getElement from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = getElement('.btn');

const showUser = async () => {
  //get user from Api
  //getUser is async function that means that it returns a Promise. We need to chain .then in order to get our actual data. Or use await.
  //   getUser().then((data) => console.log(data));
  const person = await getUser();
  //   console.log(person);

  //dispaly user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
