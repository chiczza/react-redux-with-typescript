import React from 'react';

// props로 들어올수 있는것들의 타입을 정의해준다.
interface IProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (num: number) => void;
}

const Counter: React.FC<IProps> = ({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy
}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  )
};

export default Counter;