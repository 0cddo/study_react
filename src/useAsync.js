import { useReducer, useEffect, useCallback } from 'react';

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

// 파라미터 역할 : callback (호출 api)
// deps에 상태를 받아오면 특정 상태를 바뀔 때마다 api 호출됨
// skip 파라미터: 사용자 인터랙션에 따른 fetch
function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //   useCallback 사용해서 fetchData 한 번 만들고 재사용하게 함(생략해도 됨)
  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }, [callback]);

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
    // deps - 파라미터로 받아온 것 그대로 넣음
    // eslint 경고 무시 명령어
    // eslint-disable-next-line
  }, deps);

  //   현재상태, 특정 요청 다시 시작 함수
  return [state, fetchData];
}

export default useAsync;
