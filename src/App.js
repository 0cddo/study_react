import { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import produce from 'immer';

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

// * immer 사용하여 Reducer 구현
// - 무조건 코드가 깔끔해지는건 아님, (REMOVE_USER는 깔끔해서 굳이 필요없지만 연습해서 해보자~)
// - 필수 라이브러리 아니니까 그냥 알아두세요~~

// * immer의 업데이트 함수 속성 잘 이용하면 편해요~~
// - useState에서 까다로운 객체 관리할 때 편해요~~
// 예시
/* const [todo, setTodo] = useState({
  text: 'eat pizza',
  done: false,
});

const onClick = useCallback(() => {
  setTodo(
    // 첫번째 매개변수에 바로 draft함수 넣으면 업데이트에 쓰임
    produce((draft) => {
      draft.done = !draft.done;
    })
  );
}, []); */

// * immer 주의점
// - 구형브라우저나, 리액트 네이티브에서 지원 안됨 (최신 리액트 네이티브에서는 proxy 사용 가능~)
// - 데이터 많으면 쬐끔 느려질 수 있으나~~
// - 필요한 곳에만 쓰자~~, 간단한거에는 쓰지말자~~

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   users: state.users.concat(action.user),
    // };

    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map((user) =>
    //     user.id === action.id ? { ...user, active: !user.active } : user
    //   ),
    // };

    case 'REMOVE_USER':
      return produce(state, (draft) => {
        // splice 이용해서 배열 원소 없앰
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    // return {
    //   ...state,
    //   users: state.users.filter((user) => user.id !== action.id),
    // };

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
