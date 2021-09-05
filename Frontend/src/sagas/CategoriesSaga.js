import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';


export function* getCategories(api) {
  // make the call to the api
  console.log("api : ",api);
  const response = yield call(api.getAllCategories);
  console.log("response : ",response);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveCategories(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getCategory(api, action) {
  const { categoryId } = action;
  // make the call to the api
  const response = yield call(api.getCategory, categoryId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveCategory(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* getLast5Categories(api) {
  // make the call to the api
  const response = yield call(api.getLast5Categories);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveLast5Categories(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* addCategories(api, action) {
  const { newCategory } = action;
  console.log(api);
  // make the call to the api
  const response = yield call(api.addCategories, newCategory);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveAddCategories(response.data));
    yield put(Actions.requestCategories());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

// call(api.updateCategory, updatedCategory, categoryId);

export function* updateCategories(api, action) {
  const { updatedCategory, categoryId } = action;
  // make the call to the api
  const response = yield call(api.updateCategory, updatedCategory, categoryId);
    // check if response is success
  if (response.ok) {
      // dispatch successful receiving children
    yield put(Actions.receiveUpdateCategories(response.data));
    yield put(Actions.requestCategories());
  } else {
    // dispatch failure
    console.log('Error');
  }
}

export function* updateCategory(api, action) {
  const { updatedCategory, categoryId } = action;
  // call to the api
  const response = yield call(api.updateCategory, updatedCategory, categoryId);
  // check response
  if (response.ok) {
    yield put(Actions.receiveUpdateCategories(response.data));
  } else {
    // dispatch failure
    console.log('Error');
  }
}


export function* deleteCategory(api, action) {
  const { categoryId } = action;

  const response = yield call(api.deleteCategory, categoryId);
  if (response.ok) {
    yield put(Actions.receiveDeleteCategories(response.data));
    yield put(Actions.requestCategories());
    yield put(Actions.requestLast5Categories());
  } else {
    alert('Cannot delete category! Delete its product(s) first!');
  }
}


