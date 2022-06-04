import { useReducer, useMemo, createContext } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

// UserList 컴포넌트를 거치지않고 User에 바로 함수 적용
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
