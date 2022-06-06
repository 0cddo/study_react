import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Profile, { getData } from './Profile';
import UseLocationSample from './UseLocationSample';

const Profiles = () => {
  // 객체화된 데이터 불러와서 변수 변환
  const datas = getData();
  const profiles = Object.keys(datas);

  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        {profiles.map((profile, i) => (
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'inline-block',
                  backgroundColor: isActive ? 'blue' : '',
                  color: isActive ? 'white' : '',
                };
              }}
              to={profile}
              key={i}
            >
              {profile}
            </NavLink>
          </li>
        ))}
      </ul>
      <UseLocationSample />
      <Routes>
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
