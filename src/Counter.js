import React, { useReducer } from 'react';

// * useReducer Hook
// -  useState처럼 상태 업데이트에 사용됨
// - action이라는 객체를 기반으로 상태를 업데이트함 (useState는 setValue() 사용)
// - action 객체 : 업데이트할 때 참조하는 객체
// - 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능 (다른 파일에 작성 후 불러와서 사용 가능)
// - reducer: 상태를 업데이트하는 함수
// const [ number(현재 상태), dispatch(action을 발생시키는 것)] = useReducer(reducer 함수, 기본값)

// * reducer 함수 생성 (상태의 업데이트 로직이 컴포넌트 밖에 존재)
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1 </button>
    </>
  );
}

export default Counter;
