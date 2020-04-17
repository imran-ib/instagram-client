import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_POST_QUERY } from '../../Resolvers/PostResolvers';
import Spinner from '../../utils/Spinner';
import { toast } from 'react-toastify';

type SearchPostProps = {
  term?: string | string[];
};

const SearchPost: React.FC<SearchPostProps> = ({ term }) => {
  const { data, loading, error } = useQuery(SEARCH_POST_QUERY, {
    variables: { term },
  });
  if (loading) return <Spinner />;
  if (error) toast.error(error.message);
  // console.log(data);
  return (
    <div>
      <h1>SeacrPost: {term}</h1>
      <span>{JSON.stringify(data)}</span>
    </div>
  );
};

export default SearchPost;
