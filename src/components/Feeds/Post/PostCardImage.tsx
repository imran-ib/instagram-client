import React from 'react';
import styled from 'styled-components';

const PostCardImageStyles = styled.div`
  img {
    object-fit: cover;
    width: 640px;
    height: 615px;
  }
`;

type PostCardImageProps = {
  files: {
    id: string;
    file: string;
  }[];
  username: string;
};

const PostCardImage: React.FC<PostCardImageProps> = ({ files, username }) => {
  return (
    <PostCardImageStyles>
      {files.length && (
        <img src={files[0].file} alt={`Images Posted by ${username}`} />
      )}
    </PostCardImageStyles>
  );
};

export default PostCardImage;
