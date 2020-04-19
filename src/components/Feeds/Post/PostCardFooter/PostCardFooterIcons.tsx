import React from 'react';
import styled from 'styled-components';
import {
  HeartIcon,
  DirectionIcon,
  MessageRoundedIcon,
  BookmarkIcon,
  SolidHeartIcon,
} from '../../../../styles/Icons';
import {
  TOGGLE_LIKE_MUTATION,
  FEEDS_QUERY,
} from '../../../../Resolvers/PostResolvers';
import { useMutation } from '@apollo/react-hooks';
import Pulse from 'react-reveal/Pulse';
import { useToggle_Like_MutationMutation } from '../../../../generated/graphql';

const PostCardFooterIconsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type PostCardFooterLikeCountProps = {
  likes?: {
    id: string;
    user: {
      id: string;
      username: string;
    };
  }[];
  CurrentUserId: string;
  feedId;
};

const PostCardFooterIcons: React.FC<PostCardFooterLikeCountProps> = ({
  likes,
  CurrentUserId,
  feedId,
}) => {
  const [ToggleLikePost, { loading, error }] = useToggle_Like_MutationMutation({
    variables: { postId: feedId },
    refetchQueries: [{ query: FEEDS_QUERY }],
  });
  let CurrentPostLikedByCurrentUser: boolean;
  const userids: string[] = likes.map((like) => like.user.id);
  CurrentPostLikedByCurrentUser = userids.includes(CurrentUserId);
  return (
    <PostCardFooterIconsStyles>
      <div className="left">
        <a onClick={() => ToggleLikePost()}>
          {CurrentPostLikedByCurrentUser ? (
            <Pulse spy={CurrentPostLikedByCurrentUser} duration={100}>
              {' '}
              <SolidHeartIcon />
            </Pulse>
          ) : (
            <Pulse duration={100} spy={CurrentPostLikedByCurrentUser}>
              {' '}
              <HeartIcon />{' '}
            </Pulse>
          )}
        </a>

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
