import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

// * 특정 데이터만 불러오기
async function getUser({ id }) {
  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <div>로딩중</div>;
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
