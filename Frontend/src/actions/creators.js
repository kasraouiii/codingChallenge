import Types from './types';

const requestCategories = () => ({ type: Types.CATEGORIES_REQUEST });
const receiveCategories = categories => ({ type: Types.CATEGORIES_RECEIVE, categories });

const requestLast5Categories = () => ({ type: Types.CATEGORIES_LAST5_REQUEST });
const receiveLast5Categories = last5Categories => ({ type: Types.CATEGORIES_LAST5_RECEIVE, last5Categories });

const requestAddCategories = newCategory => ({ type: Types.CATEGORIES_ADD_REQUEST, newCategory });
const receiveAddCategories = addedCategory => ({ type: Types.CATEGORIES_ADD_RECEIVE, addedCategory });

const requestUpdateCategories = (updatedCategory, categoryId) => ({ type: Types.CATEGORIES_UPDATE_REQUEST, updatedCategory, categoryId });
const receiveUpdateCategories = updatedCategory => ({ type: Types.CATEGORIES_UPDATE_RECEIVE, updatedCategory });

const requestDeleteCategories = categoryId => ({ type: Types.CATEGORIES_DELETE_REQUEST, categoryId });
const receiveDeleteCategories = deletedCategory => ({ type: Types.CATEGORIES_DELETE_RECEIVE, deletedCategory });

const requestCategory = categoryId => ({ type: Types.CATEGORY_REQUEST, categoryId});
const receiveCategory = category => ({ type: Types.CATEGORY_RECEIVE, category});


const requestProducts = () => ({ type: Types.PRODUCTS_REQUEST });
const receiveProducts = products => ({ type: Types.PRODUCTS_RECEIVE, products });

const requestLast5Products = () => ({ type: Types.PRODUCTS_LAST5_REQUEST });
const receiveLast5Products = last5Products => ({ type: Types.PRODUCTS_LAST5_RECEIVE, last5Products });

const requestAddProducts = newProduct => ({ type: Types.PRODUCTS_ADD_REQUEST, newProduct });
const receiveAddProducts = addedProduct => ({ type: Types.PRODUCTS_ADD_RECEIVE, addedProduct });

const requestUpdateProducts = (updateProduct, productId) => ({ type: Types.PRODUCTS_UPDATE_REQUEST, updateProduct, productId });
const receiveUpdateProducts = updatedProduct => ({ type: Types.PRODUCTS_UPDATE_RECEIVE, updatedProduct });

const requestDeleteProducts = productId => ({ type: Types.PRODUCTS_DELETE_REQUEST, productId });
const receiveDeleteProducts = deletedProduct => ({ type: Types.PRODUCTS_DELETE_RECEIVE, deletedProduct });

const requestProduct = productId => ({ type: Types.PRODUCT_REQUEST, productId});
const receiveProduct = product => ({ type: Types.PRODUCT_RECEIVE, product});


const requestExchange = (currencyFrom,currencyTo) => ({ type: Types.EXCHANGE_REQUEST, currencyFrom,currencyTo});
const receiveExchange = currencyExchange => ({ type: Types.EXCHANGE_RECEIVE, currencyExchange});

/**
 Makes available all the action creators we've created.
 */
export default {
  requestCategories,
  receiveCategories,
  requestLast5Categories,
  receiveLast5Categories,
  requestAddCategories,
  receiveAddCategories,
  requestUpdateCategories,
  receiveUpdateCategories,
  requestDeleteCategories,
  receiveDeleteCategories,
  requestCategory,
  receiveCategory,

  requestProducts,
  receiveProducts,
  requestLast5Products,
  receiveLast5Products,
  requestAddProducts,
  receiveAddProducts,
  requestUpdateProducts,
  receiveUpdateProducts,
  requestDeleteProducts,
  receiveDeleteProducts,
  requestProduct,
  receiveProduct,

  requestExchange,
  receiveExchange,
};

