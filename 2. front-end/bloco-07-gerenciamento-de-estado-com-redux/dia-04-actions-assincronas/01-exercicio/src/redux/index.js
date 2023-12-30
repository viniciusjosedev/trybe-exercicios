import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './reducers/index';

const store = legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;
