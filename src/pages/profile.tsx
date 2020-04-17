import React from 'react';
import { Layout } from '../components/Layout/Layout';

type ProfileProps = {
  porps: any;
};

const UserProfilePage: React.FC<ProfileProps> = () => {
  return (
    <Layout>
      <h1>UserProfilePage</h1>
    </Layout>
  );
};
export default UserProfilePage;
