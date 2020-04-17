import gql from 'graphql-tag';

export const Me = gql`
  query {
    CurrentUser {
      id
      email
      firstName
      lastName
      fullName
      avatar
      bio
      likes {
        id
      }
      posts {
        id
      }
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        caption
      }
    }
  }
`;

export const CONFIRM_LOGIN_SCRETE = gql`
  mutation($email: String!, $key: String!) {
    ConfirmSecret(email: $email, key: $key)
  }
`;

export const REQUEST_LOGIN_SCRETE = gql`
  mutation($email: String!) {
    RequestLoginSecret(email: $email) {
      email
    }
  }
`;

export const USER_SIGNUP_MUTATION = gql`
  mutation(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
    $avatar: String
    $bio: String
  ) {
    createUser(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      avatar: $avatar
      bio: $bio
    ) {
      id
      email
      fullName
      email
    }
  }
`;

export const ChatSubscription = gql`
  subscription {
    NewMessage {
      mutation
      node {
        text
      }
    }
  }
`;
