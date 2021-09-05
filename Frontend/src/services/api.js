// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (localApi) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  let baseURL = 'http://localhost:8080';
  if(localApi==false) baseURL = 'https://free.currconv.com/api/v7';
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10240
  });

  // Get all categories
  // http://localhost:8080/categories
  // http://localhost:8080/products
  const getAllCategories = () => api.get('/categories');
  const getAllProducts = () => api.get('/products');

  // Get last 5 categories
  // http://localhost:8080/categories?_sort=views&_order=DESC&_limit=5
  // http://localhost:8080/products?_sort=views&_order=DESC&_limit=5
  const getLast5Categories = () => api.get('/categories/last5Cat');
  const getLast5Products = () => api.get('/products/last5Prod');

  // Get only one category
  // Get only one product
  const getCategory = categoryId => api.get(`/categories/${categoryId}`, categoryId);
  const getProduct = productId => api.get(`/products/${productId}`, productId);

  // Add category
  // http://localhost:8080/categories
  // http://localhost:8080/products
  const addCategories = newCategory => api.post('/categories', newCategory);
  const addProducts = newProduct => api.post('/products', newProduct);

  // Update category
  // http://localhost:8080/categories/id
  // http://localhost:8080/products/id
  const updateCategory = (newCategory, categoryId) => api.put(`/categories/${categoryId}`, newCategory);
  const updateProduct = (newProduct, productId) => api.put(`/products/${productId}`, newProduct);

  // Delete category
  // http://localhost:8080/categories
  // http://localhost:8080/products
  const deleteCategory = categoryId => api.delete(`/categories/${categoryId}`);
  const deleteProduct = productId => api.delete(`/products/${productId}`);

  const exchangeEuroToOtherCurrency = (currencyFrom,currencyTo) => api.get("/convert?q="+currencyFrom+"_"+currencyTo+"&compact=ultra&apiKey=bf6bb4fcda6e145d3145");
  
  //
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getAllCategories,
    getLast5Categories,
    addCategories,
    updateCategory,
    deleteCategory,
    getCategory,
    getAllProducts,
    getLast5Products,
    addProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    exchangeEuroToOtherCurrency
  };
};

// let's return back our create method as the default.
export default {
  create
};
