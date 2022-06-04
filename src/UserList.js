import React, { useContext } from 'react';
import { UserDispatch } from './App';

// useContext : context를 컴포넌트 내부에서 바로 조회할 수 있게  하는 훅
// useState와 useReducer의 차이
// - dispatch 를 이용해 깔끔하게 관리 할 수 있음
// - 특정 함수를 여러 컴포넌트를 거쳐서 전달해야한다면 dispatch 관리 context를 만들어서 관리하면 좋다
const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() =>
          dispatch({
            type: 'TOGGLE_USER',
            id,
          })
        }
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: 'REMOVE_USER',
            id,
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
