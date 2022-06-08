// 리덕스 상태 조회, 액션 디스패치하는 컴포넌트
import React from 'react';
// 상태조회: useSelector
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // state -> 리덕스의 현재 상태 = store.getState()
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  //   액션 디스패치
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
