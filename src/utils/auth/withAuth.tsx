import React from 'react';

import { AuthProvider } from './AuthProvider';

const withAuth = (Component: React.FC) => () => {
  return (
    <>
      <Component />
    </>
  );
};

export default withAuth;
