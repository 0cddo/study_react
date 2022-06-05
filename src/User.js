import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

// * 특정 데이터만 불러오기
async function getUser(id) {
  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생!</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        Email: <b>{user.email}</b>
      </p>
    </div>
  );
}

export default User;
