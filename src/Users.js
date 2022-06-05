import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

// * useReducer로 요청상태 관리
// 요청관리에 대한 로직 분리해서 나중에 재사용 가능

// Loading, Success, Error
// reducer 함수 생성
function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    //   state 상태 초기값 입력
    loading: false,
    data: null,
    error: null,
  });
  const fetchUser = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users/'
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const { loading, data: users, error } = state;
  if (loading) return <div> 로딩중~~~ </div>;
  if (error) return <div>에러가 발생했습니다. </div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUser}>다시 불러오기</button>
    </>
  );
}

export default Users;
