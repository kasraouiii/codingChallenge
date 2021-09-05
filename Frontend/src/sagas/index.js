import { takeLatest } from 'redux-saga/effects';
import API from './/../services/api';
import Types from './../actions/types';

import { getCategories, getLast5Categories, addCategories, updateCategories, deleteCategory, getCategory } from './CategoriesSaga';
import { getProducts, getLast5Products, addProducts, updateProducts, deleteProduct, getProduct } from './ProductsSaga';
import { getExchange} from './ExchangeSaga';


// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = API.create(true);
const apiExchange = API.create(false);


/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(Types.CATEGORIES_REQUEST, getCategories, api),
    takeLatest(Types.CATEGORIES_LAST5_REQUEST, getLast5Categories, api),
    takeLatest(Types.CATEGORIES_ADD_REQUEST, addCategories, api),
    takeLatest(Types.CATEGORIES_UPDATE_REQUEST, updateCategories, api),
    takeLatest(Types.CATEGORIES_DELETE_REQUEST, deleteCategory, api),
    takeLatest(Types.CATEGORY_REQUEST, getCategory, api),

    takeLatest(Types.PRODUCTS_REQUEST, getProducts, api),
    takeLatest(Types.PRODUCTS_LAST5_REQUEST, getLast5Products, api),
    takeLatest(Types.PRODUCTS_ADD_REQUEST, addProducts, api),
    takeLatest(Types.PRODUCTS_UPDATE_REQUEST, updateProducts, api),
    takeLatest(Types.PRODUCTS_DELETE_REQUEST, deleteProduct, api),
    takeLatest(Types.PRODUCT_REQUEST, getProduct, api),

    takeLatest(Types.EXCHANGE_REQUEST, getExchange, apiExchange),

  ];
}
