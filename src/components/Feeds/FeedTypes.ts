export declare interface PostCardProps {
  feed: {
    id: string;
    caption: string;
    location: string;
    authorId: string;
    author: {
      id: string;
      email: string;
      username: string;
      avatar?: string;
    };
    comments?: {
      id: string;
      text: string;
      author: {
        username: string;
      };
    }[];
    likes?: {
      id: string;
      user: {
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
