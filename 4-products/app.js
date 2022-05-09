const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

//the app has three states: loading, error and success
//we create a fetch func and a display func and envoke them in a start func.
const fetchProducts = async () => {
  productsDOM.innerHTML = `
    <div class="loading"></div>
    `;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; //every async func returns a promise; data is a promise, that's why start func that invokes fetchProducts is async too
  } catch (error) {
    productsDOM.innerHTML = `
    <p class="error">there was an error</p>
    `;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const {
        id,
        fields: {
          price,
          name,
          image: {
            0: { url: productImg },
          },
        },
      } = product;
      const formatPrice = price / 100;

      return `
    <a href="product.html?id=${id}" class="single-product">
            <img
              src="${productImg}"
              alt="${name}"
              class="single-product-img img"
            />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>
    `;
    })
    .join('');
  productsDOM.innerHTML = `
    <div class="products-container">
    ${productList}
    </div>
    `;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
