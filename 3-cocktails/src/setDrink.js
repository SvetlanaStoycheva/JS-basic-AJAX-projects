//For every displayed drink, we want, when we click on the image to open the corresponding drink.html. We will fetch data about this specific cocktail using the id. So we need to pass the id from the clicked image (index.html) to drink.html. The problem is that we load the cocktails in the index.html section dynamically. At the beginning when the app loads the drinks don't exist.

//we use setDrink in presentDrinks. After fetching data and display data in the section, if the section is truthy => we attach eventListener to it, using bubbling we get the id of the clicked image. Save id in the localStorage, so that we can use it in displaySingleDrink.

const setDrink = (section) => {
  //using section and relaying on bubbling
  section.addEventListener('click', (e) => {
    //e.target here is the clicked image. Because the img is inside of a link, when we click on the img we get redirected to the single cocktail page. We need first to prevent that, then we can access the id on the article, which is ParentElement for img.

    // e.preventDefault();

    //In order to pass the id from here to when we click the image and get redirected to the single drink page, we will use LocalStorage
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
    // console.log(id);
  });
};
export default setDrink;
