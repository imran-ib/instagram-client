import React from 'react';
import Spinner from '../../utils/Spinner';
import { toast } from 'react-toastify';
import { useSearchQuery } from '../../generated/graphql';
import styled from 'styled-components';

const AVATAR_URL =
  'data:image/jpeg;base64,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';

const SearchPostStyles = styled.div`
  margin: 50px 0;
  .C-Card-body {
    margin: 0 auto;
  }
  .cutom-mutedt-text {
    margin-top: -5px;
  }
`;

type SearchPostProps = {
  term?: string | string[] | any;
};

const SearchPost: React.FC<SearchPostProps> = ({ term }) => {
  const { data, loading, error } = useSearchQuery({
    variables: { term: term },
    skip: term === '' || term === undefined || term === null,
  });

  if (loading) return <Spinner />;
  if (error) toast.error(error.message);
  if (!data) return null;
  const Posts = data && data.SearchPost;
  const Users = data && data.UserSearch;
  console.log('Posts', Posts);
  console.log('Users', Users);

  if (term === '' || term === undefined || term === null) {
    return <h1>Please Enter Someting To Complete the Search</h1>;
  }
  return (
    <SearchPostStyles>
      <div className="container d-flex ">
        {Users.map((user) => (
          <div key={user.id} className="card mr-4" style={{ width: '180px' }}>
            <div className="d-flex flex-column justify-content-center C-Card-body card-body">
              <img
                width="60"
                className="rounded-circle mb-3"
                src={user.avatar ? user.avatar : AVATAR_URL}
                alt={user.username}
              />
              <h6 className="card-title">{user.username}</h6>
              <small className="cutom-mutedt-text text-muted">
                Following you
              </small>
              <button className="btn btn-primary btn-sm mt-2">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </SearchPostStyles>
  );
};

export default SearchPost;
