import { useState, useCallback } from 'react';

// * custom hook 사용하기
// - 반복 로직 -> 커스텀 hook 사용,
// - 기존의 내장 훅을 사용해서 컴포넌트에서 사용하고 싶은 값 반환

// 관리할 form을 파라미터로 초기값으로 받아옴
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  //   form 초기화
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  //   배열형태로 반환
  return [form, onChange, reset];
}

export default useInputs;
