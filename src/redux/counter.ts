// action type을 선언.
// as const : string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 하기 위함.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// action 생성함수를 선언.
export const increase = () => {
  return {
    type: INCREASE
  };
};

export const decrease = () => {
  return {
    type: DECREASE
  };
};

export const increaseBy = (num: number) => {
  return {
    type: INCREASE_BY,
    payload: num
  };
};

// 모든 action 객체들에 대한 타입 선언.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론.
type CounterActionType = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

// Counter 리덕스 모듈에서 관리할 상태의 타입을 선언.
type CounterStateType = {
  count: number
};

// Counter 리덕스 모듈에서 관리할 상태의 초기상태 선언.
const initialState: CounterStateType = {
  count: 0
};

// reducer 선언.
const counterReducer = (
  state: CounterStateType = initialState,
  action: CounterActionType
) => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1
      };
    case DECREASE:
      return {
        count: state.count - 1
      };
    case INCREASE_BY:
      return {
        count: state.count + action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;