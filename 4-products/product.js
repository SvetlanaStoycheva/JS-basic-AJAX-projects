const singleProductUrl =
  'https://course-api.com/javascript-store-single-product';

const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `
    <h4 class="product-loading">Loading...</h4>
    `;
    //get the single product id from the url
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    //
    const response = await fetch(`${singleProductUrl}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `
    <p class="error">There was a problem loading the product. Please try again later</p>
    `;
  }
};

const displayProduct = (product) => {
  console.log(product);
  const {
    fields: {
      colors,
      company,
      description,
      name,
      price,
      image: {
        0: { url },
      },
    },
  } = product;
  const formatedPrice = price / 100;
  //set the page title
  document.title = name.toUpperCase();
  //colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `
  <div class="product-wrapper">
        <img src="${url}" alt="${name}" class="img" />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}</h5>
          <span>$${formatedPrice}</span>
          <div class="colors">
          ${colorsList}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>
  `;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
