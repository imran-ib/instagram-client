import React from 'react';

type PostCardFooterLikeCountProps = {
  likes?: {
    id: string;
    user: {
      username: string;
    };
  }[];
};

const PostCardFooterLikeCount: React.FC<PostCardFooterLikeCountProps> = ({
  likes,
}) => {
  const TotalLikes = likes.length;

  return (
    <div className="card-like-count">
      Liked By <strong>{likes[0].user.username}</strong> and{' '}
      <strong>{TotalLikes} others</strong>{' '}
    </div>
  );
};

export default PostCardFooterLikeCount;
