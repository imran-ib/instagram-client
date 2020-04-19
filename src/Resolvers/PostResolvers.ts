import { Comments_For_Post_QueryDocument } from './../generated/graphql';
import gql from 'graphql-tag';

export const SEARCH_POST_QUERY = gql`
  query SEARCH_POST_QUERY($term: String!) {
    SearchPost(term: $term) {
      id
      caption
      location
      authorId
    }
  }
`;

export const FEEDS_QUERY = gql`
  query FEEDS_QUERY {
    Feeds {
      id
      caption
      location
      authorId
      comments {
        id
      }

      author {
        id
        email
        username
      }

      likes {
        id
        user {
          id
          username
        }
      }
      files {
        id
        file
      }
      createdAt
      updatedAt
    }
  }
`;

export const TOGGLE_LIKE_MUTATION = gql`
  mutation TOGGLE_LIKE_MUTATION($postId: String!) {
    ToggleLikePost(postId: $postId)
  }
`;

export const COMMENT_MUTATION = gql`
  mutation COMMENT_MUTATION($text: String!, $postId: String!) {
    CreateComment(text: $text, postId: $postId) {
      id
      text
    }
  }
`;

export const COMMENTS_FOR_POST_QUERY = gql`
  query COMMENTS_FOR_POST_QUERY($postId: String!) {
    Comments(postId: $postId) {
      id
      text
      author {
        username
      }
      post {
        caption
      }
    }
  }
`;
