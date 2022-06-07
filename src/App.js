import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
