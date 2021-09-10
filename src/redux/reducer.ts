import { combineReducers } from 'redux';
import counterReducer from './counter';

// combineReducers로 reducer들을 결합한다.
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;

// 추후 다른 컴포넌트 들에서 useSelector시 타입을 명시해야함으로 export해준다.
export type RootStateType = ReturnType<typeof rootReducer>;