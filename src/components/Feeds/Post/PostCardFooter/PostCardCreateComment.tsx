import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { COMMENTS_FOR_POST_QUERY } from '../../../../Resolvers/PostResolvers';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { useComment_MutationMutation } from '../../../../generated/graphql';

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
    resize: none;
    &:focus {
      outline: none;
    }
    &:active {
      background-color: transparent;
    }
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

type PostCardCreateCommentProps = {
  postId: string;
};

const PostCardCreateComment: React.FC<PostCardCreateCommentProps> = ({
  postId,
}) => {
  const [CreateComment, { loading, error }] = useComment_MutationMutation({
    refetchQueries: [
      {
        query: COMMENTS_FOR_POST_QUERY,
        variables: { postId: postId },
      },
    ],
  });
  const { register, handleSubmit, setValue, watch, errors } = useForm();

  const onSubmit = (data: any) => {
    const message = data.message;
    CreateComment({
      variables: {
        text: message,
        postId: postId,
      },
    })
      .then(() => setValue([{ message: '' }]))
      .catch((err) => toast.error(err.message));
  };

  return (
    <PostCardCreateCommentStyles>
      <hr />
      <form action="POST" onSubmit={handleSubmit(onSubmit)}>
        {loading && <Spinner animation="border" />}
        <input
          type="text"
          placeholder="Add Comment"
          name="message"
          ref={register}
        />
        <input type="submit" value="Post" />
      </form>
    </PostCardCreateCommentStyles>
  );
};

export default PostCardCreateComment;
