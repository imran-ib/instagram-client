import React from 'react';
import styled from 'styled-components';

const PostCardCreateCommentStyles = styled.div`
  form {
    padding-right: -20px;
    padding-left: -20px;
    display: flex;
    justify-content: space-between;
  }
  input[type='text'] {
    padding-top: 20px;
    width: 90%;
    border: none;
    box-sizing: border-box;
  }
  input[type='submit'] {
    background-color: white;
    color: ${({ theme }) => theme.blueColor};
    font-weight: 500;
    padding-top: 20px;
    border: none;
    box-sizing: border-box;
  }
  hr {
    width: 107%;
    margin: 0;
    padding: 0;
    margin-left: -20px;
  }
`;

const PostCardCreateComment = () => {
  return (
    <PostCardCreateCommentStyles>
      <hr />
      <form action="POST">
        <input type="text" placeholder="Add Comment" />
        <input type="submit" value="Post" />
      </form>
    </PostCardCreateCommentStyles>
  );
};

export default PostCardCreateComment;
