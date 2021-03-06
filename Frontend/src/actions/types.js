// A list of all actions in the system.
import { createTypes } from 'reduxsauce';

export default createTypes(`

  CATEGORIES_REQUEST
  CATEGORIES_RECEIVE

  CATEGORY_REQUEST
  CATEGORY_RECEIVE

  CATEGORIES_LAST5_REQUEST
  CATEGORIES_LAST5_RECEIVE

  CATEGORIES_ADD_REQUEST
  CATEGORIES_ADD_RECEIVE

  CATEGORIES_UPDATE_REQUEST
  CATEGORIES_UPDATE_RECEIVE

  CATEGORIES_DELETE_REQUEST
  CATEGORIES_DELETE_RECEIVE

  PRODUCTS_REQUEST
  PRODUCTS_RECEIVE

  PRODUCT_REQUEST
  PRODUCT_RECEIVE

  PRODUCTS_LAST5_REQUEST
  PRODUCTS_LAST5_RECEIVE

  PRODUCTS_ADD_REQUEST
  PRODUCTS_ADD_RECEIVE

  PRODUCTS_UPDATE_REQUEST
  PRODUCTS_UPDATE_RECEIVE

  PRODUCTS_DELETE_REQUEST
  PRODUCTS_DELETE_RECEIVE

  EXCHANGE_REQUEST
  EXCHANGE_RECEIVE

`);
