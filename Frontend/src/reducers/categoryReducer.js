import { createReducer } from 'reduxsauce';
import Types from '../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  list: []
};

// request last 5 categories
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 categories
const receive = (state, { categories }) =>
   Object.assign({}, state, {
     fetching: false,
     list: categories
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CATEGORIES_REQUEST]: request,
  [Types.CATEGORIES_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

