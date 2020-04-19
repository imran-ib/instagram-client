export declare interface PostCardProps {
  feed: {
    id: string;
    caption: string;
    location: string;
    author: {
      id: string;
      email: string;
      username: string;
      avatar?: string;
    };

    likes?: {
      id: string;
      user: {
        id: string;
        username: string;
      };
    }[];
    files?: {
      id: string;
      file: string;
    }[];
    createdAt: string;
  };
}
export declare interface CommentsProps {
  comments?: {
    id: string;
    text: string;
    author: {
      username: string;
    };
  }[];
}
