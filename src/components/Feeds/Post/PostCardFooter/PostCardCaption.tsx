import React from 'react';
import styled from 'styled-components';

const PostCardCaptionStyles = styled.div``;

type PostCardCaptionProps = {
  caption: string;
};

const PostCardCaption: React.FC<PostCardCaptionProps> = ({ caption }) => {
  return <PostCardCaptionStyles>{caption}</PostCardCaptionStyles>;
};

export default PostCardCaption;
