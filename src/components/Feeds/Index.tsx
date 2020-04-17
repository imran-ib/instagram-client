import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FEEDS_QUERY } from '../../Resolvers/PostResolvers';
import Spinner from '../../utils/Spinner';
import PostCard from './Post/PostCard';
import styled from 'styled-components';

const FeedsStyles = styled.div`
  margin-top: 30px;
`;

const Feeds = () => {
  const { data, loading, error } = useQuery(FEEDS_QUERY);

  if (loading) return <Spinner />;
  if (!data)
    return (
      <h1 className="text-center m-5">
        OPPS!! No Post Found. Whould You Like To Create One.??
      </h1>
    );
  const Feeds = data.Feeds;

  return (
    <FeedsStyles>
      {Feeds.map((feed) => (
        <PostCard key={feed.id} feed={feed} />
      ))}
    </FeedsStyles>
  );
};

export default Feeds;
