import { createStore } from 'redux';

// DOM 레퍼런스 생성
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h2');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 함수 생성
const toggleSwitch = () => ({ type: 'TOGGLE_SWITCH' });
const increase = (difference) => ({ type: 'INCREASE', difference });
const decrease = () => ({ type: 'DECREASE' });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer 함수 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SWITCH':
      return {
        ...state,
        toggle: !state.toggle,
      };
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// render 함수 생성
const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
};

render();
store.subscribe(render);

// action 발생 (dispatch)

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
