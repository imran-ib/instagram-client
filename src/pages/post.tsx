import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { AuthProvider } from '../utils/auth';

type PostProps = {
  porps: any;
};

const UserPostPage: React.FC<PostProps> = () => {
  return (
    <AuthProvider>
      <Layout>
        <h1>UserPostPage</h1>
      </Layout>
    </AuthProvider>
  );
};
export default UserPostPage;
