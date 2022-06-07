import { createStore } from 'redux';

// 초기값 설정
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

// action 설정
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action 생성 함수
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// reducer 함수 생성
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// 현재 스토어 안의 상태 조회
console.log(store.getState());

// 스토어 구독,(subscribe, getState() 거의 사용할 일 없음)
const listener = () => {
  const state = store.getState();
  //   액션 디스패치 될때마다 콘솔에 현재 상태 출력
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독 해제
// unsubscribe();

// action 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요!'));
store.dispatch(addToList({ id: 1, text: '헬로우~' }));

// 브라우저에서 store 사용
window.store = store;
window.unsubscribe = unsubscribe;

// store가 특정 액션 디스패치되면 상태 업데이트 됨
// 구독한 함수 호출됨
// unsubscribe 되면 더이상 안됨
