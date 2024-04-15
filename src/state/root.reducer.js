import { combineReducers } from 'redux';
import { tableFilterReducer } from './tableFilters/tableFilters.reducer.js';

export default combineReducers({
  tableFilterReducer,
});
