import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/simi">simi profile</Link>
        </li>
        <li>
          <Link to="/profiles/kimi">kimi profile</Link>
        </li>
      </ul>
      <hr />
      {/* 최신 Node ver으로 router 사용 변화
      참조: https://bloodstrawberry.tistory.com/588 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
