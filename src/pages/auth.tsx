import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { useRouter } from 'next/router';
import { useUser } from '../utils/auth';
import Account from '../components/Auth/Account';

type AuthProps = {
  porps: any;
};

const UserAuthenticationPage: React.FC<AuthProps> = () => {
  const router = useRouter();
  const CurrentUser = useUser();

  if (CurrentUser) {
    router.push('/');
  }

  return (
    <Layout>
      <Account />
    </Layout>
  );
};
export default UserAuthenticationPage;
