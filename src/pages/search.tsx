import React from 'react';
import { useRouter } from 'next/router';
import SearchPost from '../components/Search/SearchPost';
import { Layout } from '../components/Layout/Layout';

const SearchPage = () => {
  const router = useRouter();
  const { term } = router.query;
  return (
    <Layout>
      {' '}
      <SearchPost term={term} />
    </Layout>
  );
};

export default SearchPage;
