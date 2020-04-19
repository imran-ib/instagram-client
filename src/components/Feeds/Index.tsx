import React from 'react';
import Spinner from '../../utils/Spinner';
import PostCard from './Post/PostCard';
import styled from 'styled-components';
import { useFeeds_QueryQuery } from '../../generated/graphql';

const FeedsStyles = styled.div`
  margin-top: 30px;
`;

const Feeds = () => {
  const { data, loading, error } = useFeeds_QueryQuery();

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
