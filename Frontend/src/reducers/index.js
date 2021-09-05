/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CategoryReducer from './categoryReducer';
import CategoryLast5Reducer from './categoryLast5Reducer';

import ProductReducer from './productReducer';
import ProductLast5Reducer from './productLast5Reducer';

import category from './category';
import product from './product';
import currencyExchange from './exchange';


const combined = combineReducers(
  {
    routing: routerReducer,
    categories: CategoryReducer,
    last5Categories: CategoryLast5Reducer,
    products: ProductReducer,
    last5Products: ProductLast5Reducer,
    category,
    product,
    currencyExchange,
  }
);

module.exports = combined;
