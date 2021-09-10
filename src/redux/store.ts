import { createStore } from 'redux';
import rootReducer from './reducer';

// store 생성.
const store = createStore(rootReducer);
export default store;