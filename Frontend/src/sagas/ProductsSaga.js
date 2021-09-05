import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';


export function* getProducts(api) {
  // make the call to the api
  const response = yield call(api.getAllProducts);
  console.log("response : ",response);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    console.log("before dispatch");
    let products=[];
    response.data.map(product=>{
      product.category=product.category.name;
      products.push(product);
    })
    yield put(Actions.receiveProducts(products));
    console.log("after dispatch");

  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getProduct(api, action) {
  const { productId } = action;
  // make the call to the api
  const response = yield call(api.getProduct, productId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveProduct(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}


export function* getLast5Products(api) {
  // make the call to the api
  const response = yield call(api.getLast5Products);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveLast5Products(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* addProducts(api, action) {
  const { newProduct } = action;
  // make the call to the api
  const response = yield call(api.addProducts, newProduct);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveAddProducts(response.data));
    yield put(Actions.requestProducts());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* updateProducts(api, action) {
  const { updateProduct, productId } = action;
  // make the call to the api
  const response = yield call(api.updateProduct, updateProduct, productId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveUpdateProducts(response.data));
    yield put(Actions.requestProducts());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* deleteProduct(api, action) {
  const { productId } = action;
  // make the call to the api
  const response = yield call(api.deleteProduct, productId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveDeleteProducts(response.data));
    yield put(Actions.requestProducts());
    yield put(Actions.requestLast5Products());
  } else {
    // dispatch failure
    console.log('Error');
  }
}
