import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  //  store에서 현재 상태 불러옴
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //   컴포넌트 불러올때마다 함수 렌더링 방지 위해 useCallback 사용
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
