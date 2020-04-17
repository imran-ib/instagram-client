import React from 'react';
import { Layout } from '../components/Layout/Layout';

type FeedProps = {
  porps: any;
};

const FeedsPage: React.FC<FeedProps> = () => {
  return (
    <Layout>
      <h1>FeedsPage</h1>
    </Layout>
  );
};
export default FeedsPage;
