import { createReducer } from 'reduxsauce';
import Types from './../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  currencyExchange: {}
};

const request = state =>
  Object.assign({}, state, { fetching: true });

const receive = (state, { currencyExchange }) =>
   Object.assign({}, state, {
     fetching: false,
     currencyExchange
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.EXCHANGE_REQUEST]: request,
  [Types.EXCHANGE_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

