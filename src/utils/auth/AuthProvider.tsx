import React, { createContext, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';
import { logout } from './helpers';
import ErrorPage from '../../pages/_error';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';

// TODO: Set-up your real user query here
export const Me = gql`
  query {
    CurrentUser {
      id
      email
      firstName
      lastName
      fullName
      username
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

type AuthContextParams = [{ data: any }, typeof logout];

const AuthContext = createContext<AuthContextParams>([{ data: null }, logout]);

const AuthProvider: React.FC = ({ children }) => {
  const { loading, data, error } = useQuery(Me);

  // Usally you dont see this, because we have no "loading" state on SSR
  if (loading) {
    return <div>Loading...</div>;
  }

  // JWT token expired or any API-level errors, you can use redirects here
  if (error) {
    console.error(error);

    return <ErrorPage statusCode={401} />;
  }

  if (!data.CurrentUser) {
    return (
      <>
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Please Sign In before Continuing
        </h2>
        <h1> Login Form</h1>
      </>
    );
  }

  return (
    <AuthContext.Provider value={[{ data }, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

function useUser() {
  const { loading, data, error } = useQuery(Me);

  if (data) {
    return data.CurrentUser;
  }
}

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth, useUser };
