import { useRef, useReducer, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

// useState 구현 내용 useReducer로 변경
// - 1. App 컴포넌트에서 사용할 초기상태를 컴포넌트 밖에 선언하기
const initialState = {
  inputs: {
    username: '',
    email: '',
  },
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

// - 2. reducer 함수 만들기
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'CREATE_USER':
      return {
        // useState에서는 아래의 작업 각 따로 했는데 이제는 동시 처리 가능
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

// * useReducer vs useState
// - 상황에 따라 사용합니다
// - 컴포넌트에서 관리하는 값이 딱 하나, 또는 단순한 숫자일 때는 useState가 편리
// - 컴포넌트에서 관리하는 값이 여러개, 상태 구조 복잡
// - 맘에 드는 방식으로 선택해서 사용
