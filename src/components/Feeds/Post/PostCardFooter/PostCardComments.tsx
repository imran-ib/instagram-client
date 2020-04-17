import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { HeartIconSmall } from '../../../../styles/Icons';

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
  comments?: {
    id: string;
    text: string;
    author: {
      username: string;
    };
  }[];
  createdAt: string;
};

const PostCardComments: React.FC<PostCardCommentsProps> = ({
  comments,
  createdAt,
}) => {
  const CommentLength = comments.length;
  return (
    <PostCardCommentsStyles>
      <div className="comments-cout">
        <Link href="/commets">
          <a> View All {CommentLength} comments</a>
        </Link>
      </div>
      <div className="first-two-comments">
        <ul>
          <li>
            <span>
              <strong>{comments[0].author.username}</strong> {comments[0].text}
            </span>{' '}
            <HeartIconSmall />
          </li>
          <li>
            <span>
              <strong>{comments[1].author.username}</strong> {comments[1].text}
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
