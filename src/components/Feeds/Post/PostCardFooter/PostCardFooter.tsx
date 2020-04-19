import React from 'react';
import styled from 'styled-components';
import PostCardFooterLikeCount from './PostCardFooterLikeCount';
import PostCardFooterIcons from './PostCardFooterIcons';
import PostCardComments from './PostCardComments';
import PostCardCreateComment from './PostCardCreateComment';
import PostCardCaption from './PostCardCaption';
import { useUser } from '../../../../utils/auth';

const PostCardFooterStyles = styled.div`
  padding: 20px 20px 0 20px;
  & > * {
    margin-bottom: 10px;
  }
`;

const PostCardFooter = ({ feed }) => {
  const CurrentUser = useUser();
  return (
    <PostCardFooterStyles>
      <PostCardFooterIcons
        CurrentUserId={CurrentUser && CurrentUser.id}
        likes={feed.likes}
        feedId={feed.id}
      />
      <PostCardFooterLikeCount likes={feed.likes} />
      <PostCardCaption caption={feed.caption} />
      <PostCardComments postId={feed.id} createdAt={feed.createdAt} />
      <PostCardCreateComment postId={feed.id} />
    </PostCardFooterStyles>
  );
};

export default PostCardFooter;
