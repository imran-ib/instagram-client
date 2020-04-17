import React from 'react';
import { Layout } from '../components/Layout/Layout';
import Feeds from '../components/Feeds/Index';

type HomeProps = {
  porps: any;
};

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <Feeds />
    </Layout>
  );
};
export default Home;
