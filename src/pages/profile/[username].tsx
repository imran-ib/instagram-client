import React from 'react';
import { useRouter } from 'next/router';
import Profile from '../../components/Auth/MyProfile/Profile';
import { Layout } from '../../components/Layout/Layout';

function MyProfilePage() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <Layout>
      <Profile username={username} />
    </Layout>
  );
}

export default MyProfilePage;
