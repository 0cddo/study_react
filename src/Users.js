import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User';

// * useAsync 커스텀 훅만들어서 상태 관리

// useAsync 사용할 때 callback 으로 넣어 줄 함수 생성
async function getUsers() {
  const response = await axios.get(
    'http://jsonplaceholder.typicode.com/users/'
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const {
    data: users,
    error,
    isLoading,
    reload,
    run,
  } = useAsync({
    // promiseFn: getUsers,
    deferFn: getUsers,
  });

  if (isLoading) return <div> 로딩중~~~ </div>;
  if (error) return <div>에러가 발생했습니다. </div>;
  if (!users) return <button onClick={run}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
