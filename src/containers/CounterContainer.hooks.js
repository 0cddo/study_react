// 리덕스 상태 조회, 액션 디스패치하는 컴포넌트
import React from 'react';
// 상태조회: useSelector
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // state -> 리덕스의 현재 상태 = store.getState()
  // 매번 새로운 객체 생성됨 -> 리렌더링

  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    // shallowEqual 사용 주의점 : 객체 얕게 비교 -> 불변성 중요!
    shallowEqual,

    // shallowEqual 로 객체일 때 최적화 쉽게 가능
    /* (left, right) => {
      return left.diff === right.diff && left.number === right.number;
    }, */
  );

  /*  const number = useSelector(state => state.counter.number)
 const diff = useSelector(state => state.counter.diff) */

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

// * 최적화의 필요성
// - 컴포넌트의 크기  = 내용이 많다
// - 리스트 렌더링 = 항목 많음
// - 렌더링 자주 일어난다
