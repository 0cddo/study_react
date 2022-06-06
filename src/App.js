import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  const location = useLocation();
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
          <Link to="/profiles">profile</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profiles/*" element={<Profiles />} />
        <Route path="history" element={<HistorySample />} />
        <Route
          path="*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
