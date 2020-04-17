import React from 'react';
import styled from 'styled-components';
import PostCardHeader from './PostCardHeader';
import PostCardImage from './PostCardImage';
import PostCardFooter from './PostCardFooter/PostCardFooter';
import { PostCardProps } from '../FeedTypes';

const PostCardStyles = styled.div`
  margin: 0 auto;
  ${({ theme }) => theme.whiteBox};
  width: 640px;
  min-height: 950px;
  margin-bottom: 60px;
`;

const PostCard: React.FC<PostCardProps> = ({ feed }) => {
  return (
    <PostCardStyles>
      <PostCardHeader
        username={feed.author.username}
        avatar={feed.author.avatar}
      />
      <PostCardImage username={feed.author.username} files={feed.files} />
      <PostCardFooter feed={feed} />
    </PostCardStyles>
  );
};

export default PostCard;
