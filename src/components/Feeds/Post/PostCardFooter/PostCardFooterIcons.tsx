import React from 'react';
import styled from 'styled-components';
import {
  HeartIcon,
  DirectionIcon,
  MessageRoundedIcon,
  BookmarkIcon,
} from '../../../../styles/Icons';

const PostCardFooterIconsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostCardFooterIcons = () => {
  return (
    <PostCardFooterIconsStyles>
      <div className="left">
        <HeartIcon />
        <MessageRoundedIcon />
        <DirectionIcon />
      </div>
      <div className="right">
        <BookmarkIcon />
      </div>
    </PostCardFooterIconsStyles>
  );
};

export default PostCardFooterIcons;
