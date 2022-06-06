import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  // {username} = match.params = simi
  // {profile.name} = 영은
  simi: {
    name: '영은',
    description: '귀여운 영으니~~~화이팅!!',
  },
  kimi: {
    name: '현준',
    description: '멋진 현주니 화이팅~~~!!',
  },
};

const Profile = () => {
  // useParams 사용!!
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다. </div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
