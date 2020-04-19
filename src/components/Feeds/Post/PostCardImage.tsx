import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

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
  const images = files.map((file) => file.file);

  return (
    <PostCardImageStyles>
      <Carousel>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Posted by ${username}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </PostCardImageStyles>
  );
};

export default PostCardImage;
