import React from 'react';
import styled from 'styled-components';
import PostCardFooterLikeCount from './PostCardFooterLikeCount';
import PostCardFooterIcons from './PostCardFooterIcons';
import PostCardComments from './PostCardComments';
import PostCardCreateComment from './PostCardCreateComment';
import PostCardCaption from './PostCardCaption';
import { PostCardProps } from '../../FeedTypes';

const PostCardFooterStyles = styled.div`
  padding: 20px 20px 0 20px;
  & > * {
    margin-bottom: 10px;
  }
`;

const PostCardFooter: React.FC<PostCardProps> = ({ feed }) => {
  console.log('feed', feed);
  return (
    <PostCardFooterStyles>
      <PostCardFooterIcons />
      <PostCardFooterLikeCount likes={feed.likes} />
      <PostCardCaption caption={feed.caption} />
      <PostCardComments comments={feed.comments} createdAt={feed.createdAt} />
      <PostCardCreateComment />
    </PostCardFooterStyles>
  );
};

export default PostCardFooter;
