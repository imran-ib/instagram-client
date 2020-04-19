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
      Liked By
      <strong> {TotalLikes} </strong>{' '}
    </div>
  );
};

export default PostCardFooterLikeCount;
