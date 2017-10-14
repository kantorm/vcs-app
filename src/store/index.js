import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({}),
  devToolsEnhancer()
)

export default store;
