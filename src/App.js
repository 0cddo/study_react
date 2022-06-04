import { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import produce from 'immer';

// * immer 라이브러리를 이용해 더 쉽게 불변성 지키기
// window.produce = produce;

// * immer 활용방법 1
// produce(바꾸고싶은 객체 또는 배열, 어떻게 바꿀지 함수삽입)
/* const state = {
  number: 1,
  dontChangeMe: 2,
};

const nextState = produce(state, (draft) => (draft.number += 1));
console.log(nextState); */

// * immer 활용방법 2
/* const array = [
  { id: 1, text: 'hello' },
  { id: 2, text: '0cddo' },
  { id: 3, text: 'kimi' },
];

const nextArray = produce(array, (draft) => {
  draft.push({ id: 4, text: '9min' });
  draft[0].text = draft[0].text + ' world';
});

console.log(nextArray); 
console.log(array); // 기존 배열 변화없이 불변성 유지됨 
*/

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'young eun',
      email: 'hello0@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'hyun joon',
      email: 'hellojoon@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'shim ddo',
      email: 'hello-ddo@gmail.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error('Unhandled action');
  }
}

// 기본값 필요없어서 null 입력
export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
