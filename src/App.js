import Hello from './Hello';
import Wrapper from './Wrappers';

// 조건부 렌더링
// 조건 참 거짓에 따라 결과를 다르게 보여줌
function App() {
  return (
    <>
      <Wrapper>
        {/* isSpecial={true} 와 isSpecial은 값을 입력하지 않아도 동일하게 true값임 */}
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
    </>
  );
}

export default App;
