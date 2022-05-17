import get from '../src/getElement.js';

const loadingImg = get('.loading');

export const showLoading = () => {
  loadingImg.classList.remove('hide-loading');
};

export const hideLoading = () => {
  loadingImg.classList.add('hide-loading');
};
