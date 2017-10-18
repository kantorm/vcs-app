import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  devToolsEnhancer()
)

export default store;
