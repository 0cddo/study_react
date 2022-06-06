import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/simi">simi</Link>
        </li>
        <li>
          <Link to="/profiles/kimi">kimi</Link>
        </li>
      </ul>

      <Routes>
        {/* index : path 공유 */}
        <Route index element={<div>유저를 선택해주세요</div>} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
