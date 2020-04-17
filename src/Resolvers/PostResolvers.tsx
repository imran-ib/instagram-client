import gql from 'graphql-tag';

export const SEARCH_POST_QUERY = gql`
  query($term: String!) {
    SearchPost(term: $term) {
      id
      caption
      location
      authorId
    }
  }
`;

export const FEEDS_QUERY = gql`
  query {
    Feeds {
      id
      caption
      location

      author {
        id
        email
        username
      }

      authorId
      comments {
        id
        text
        author {
          username
        }
      }

      likes {
        id
        user {
          username
        }
      }
      files {
        id
        file
      }
      createdAt
    }
  }
`;
