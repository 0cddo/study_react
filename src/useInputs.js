import { useReducer, useCallback } from 'react';

// * useState대신 useReducer 사용해서 커스텀 Hook 생성
function reducer(state, action) {
  switch (action.type) {
    // CHANGE
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    // RESET
    case 'RESET':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value,
    });
  }, []);

  const reset = useCallback(
    () =>
      dispatch({
        type: 'RESET',
      }),
    []
  );

  return [form, onChange, reset];
}

export default useInputs;
