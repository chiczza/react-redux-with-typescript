import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '../redux/reducer';
import { increase, decrease, increaseBy } from '../redux/counter';

import Counter from '../components/Counter';

const CounterContainer: React.FC = () => {
  // 현재 redux에 count 상태를 조회.
  // state에 타입을 명시해줘야 하기 때문에 정의해놓았던 RootStatType을 사용하여 명시해준다.
  const { count } = useSelector((state: RootStateType) => state.counter);
  // redux action을 dispatch해주기 위한 함수를 가져온다.
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  }

  const onDecrease = () => {
    dispatch(decrease());
  }

  const onIncreaseBy = (num: number) => {
    dispatch(increaseBy(num));
  }

  return (
    <Counter {...{ count, onIncrease, onDecrease, onIncreaseBy }} />
  );
};

export default CounterContainer;