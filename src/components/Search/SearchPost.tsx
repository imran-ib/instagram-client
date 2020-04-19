import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_POST_QUERY } from '../../Resolvers/PostResolvers';
import Spinner from '../../utils/Spinner';
import { toast } from 'react-toastify';
import { useSearch_Post_QueryQuery } from '../../generated/graphql';

type SearchPostProps = {
  term?: string | string[] | any;
};

const SearchPost: React.FC<SearchPostProps> = ({ term }) => {
  const { data, loading, error } = useSearch_Post_QueryQuery({
    variables: { term: term },
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
