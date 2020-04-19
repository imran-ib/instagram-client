import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { HeartIconSmall } from '../../../../styles/Icons';
import Spinner from '../../../../utils/Spinner';
import { useComments_For_Post_QueryQuery } from '../../../../generated/graphql';

const PostCardCommentsStyles = styled.div`
  .comments-cout {
    a {
      color: ${({ theme }) => theme.darkGreyColor};
      text-decoration: none;
    }
  }
  .first-two-comments {
    ul {
      margin: 0;
      padding: 0;
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .time-ago {
    a {
      color: ${({ theme }) => theme.darkGreyColor};
      text-decoration: none;
    }
  }
`;

type PostCardCommentsProps = {
  postId: string;
  createdAt: string;
};

const PostCardComments: React.FC<PostCardCommentsProps> = ({
  postId,
  createdAt,
}) => {
  const { data, loading, error } = useComments_For_Post_QueryQuery({
    variables: { postId },
  });
  if (loading) return <Spinner />;
  if (data && data.Comments && data.Comments.length <= 0) {
    return (
      <span className="font-weight-bold m-5">
        {' '}
        Be The First One To Create Comment{' '}
      </span>
    );
  }

  const Comments = data.Comments;
  const CommentLength = Comments.length;
  const FirestComment = Comments[0];
  const SecondComment = Comments[1];

  return (
    <PostCardCommentsStyles>
      <div className="comments-cout">
        <Link href="/commets">
          <a> View All {CommentLength} comments</a>
        </Link>
      </div>
      <div className="first-two-comments">
        <ul>
          {SecondComment && (
            <li>
              <span>
                <strong>{SecondComment.author.username}</strong>{' '}
                {SecondComment.text}
              </span>{' '}
              <HeartIconSmall />
            </li>
          )}
          <li>
            <span>
              <strong>{FirestComment.author.username}</strong>{' '}
              {FirestComment.text}
            </span>{' '}
            <HeartIconSmall />
          </li>
        </ul>
      </div>
      <div className="time-ago">
        <Link href="/profile">
          <a>{createdAt}</a>
        </Link>
      </div>
    </PostCardCommentsStyles>
  );
};

export default PostCardComments;
