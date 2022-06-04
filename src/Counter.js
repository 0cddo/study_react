import React, { Component } from 'react';

// * Component에서 커스텀 메소드 만들기
//  - class 내부에 함수 선언

class Counter extends Component {
  // *** this 연결끊김 해결방법 ***
  // 1. 컴포넌트 생성자 constructor에서 함수 미리 바인딩
  /* constructor(this.props) {
      super(props);
      this.handleIncrease = this.handleIncrease.bind(this)
      this.handleDecrease = this.handleDecrease.bind(this)
    } */
  // 2. 화살표 함수 이용

  /*   constructor(props) {
    super(props);
    // state 무조건 객체 형태
    this.state = {
      counter: 0,
    };
  } */

  // 정식 아니고, 바벨 플러그인 이용해 사용 가능 (클래스 프로퍼티즈)
  state = { counter: 0, fixed: 1 };

  handleIncrease = () => {
    // 상태 업데이트를 위해 setState 사용해야함
    console.log(this); // undefined // 이벤트 등록으로 메소드 연결 끊김

    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        {/* 이벤트 등록하면서 메소드와 컴포넌트 인스턴스(this)의  관계가 끊김, this */}

        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1 </button>
        <p>고정된값: {this.state.fixed}</p>
      </div>
    );
  }
}

/* function reducer(state, action) {
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
} */

export default Counter;
