import React from 'react';

type ProfileProps = {
  username: string | string[];
};

const Profile: React.FC<ProfileProps> = ({ username }) => {
  return <div>{username}</div>;
};

export default Profile;
