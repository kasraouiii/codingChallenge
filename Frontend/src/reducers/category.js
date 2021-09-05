import { createReducer } from 'reduxsauce';
import Types from '../actions/types';

export const INITIAL_STATE = {
  fetching: false,
  category: {}
};

// request last 5 categories
const request = state =>
  Object.assign({}, state, { fetching: true });

// receive last 5 categories
const receive = (state, { category }) =>
   Object.assign({}, state, {
     fetching: false,
     category
   });


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.CATEGORY_REQUEST]: request,
  [Types.CATEGORY_RECEIVE]: receive
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

