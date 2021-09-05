import { call, put } from 'redux-saga/effects';
import Actions from '../actions/creators';

export function* getExchange(api, action) {
    const { currencyFrom,currencyTo } = action;
    // make the call to the api
    console.log("currr : ",currencyFrom);
    const response = yield call(api.exchangeEuroToOtherCurrency, currencyFrom,currencyTo);
    console.log("responseExchange : ",response);
      // check if response is success
    if (response.ok) {
        // dispatch successful receiving children
      yield put(Actions.receiveExchange(response.data));
    } else {
      // dispatch failure
      console.log('Error');
    }
  }