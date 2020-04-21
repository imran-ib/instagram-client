import React, { useState } from 'react';
import { SearchIcon } from '../../styles/Icons';
import Downshift from 'downshift';
import styled from 'styled-components';
import { customMedia } from '../../styles/GlobalStyles';
import { ApolloConsumer } from '@apollo/react-common';
import debounce from 'lodash.debounce';
import { SEARCH } from '../../Resolvers/PostResolvers';
import { useRouter } from 'next/router';

type SearchUserProps = {
  id?: string;
  avatar: string;
  username: string;
  postCount: number;
  following: { id: string }[];
}[];

type SearchPostProps = {
  id?: string;
  caption?: string;
  files?: {
    id: string;
    file: string;
  }[];
  likes?: {
    id: string;
  }[];
}[];

const SearchBar: React.FC = () => {
  const [value, setvalue] = useState('');
  const [SearchUsers, setSearchUsers] = useState<SearchUserProps>([]);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const onChangeHandler = debounce(async (e, client) => {
    setloading(true);

    const res = await client.query({
      query: SEARCH,
      variables: { term: e.target.value },
    });
    // Instagram is only showing users in dropdown and there post count
    // setSearchPosts(res.data.SearchPost);
    setSearchUsers(res.data.UserSearch);
    setvalue(e.target.value);

    setloading(false);
  }, 350);

  return (
    <>
      <Downshift
        id="lang-switcher"
        onChange={(item) => router.replace(`/profile/${item.username}`)}
        itemToString={(item) => (item === null ? '' : item.username)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          inputValue,
        }) => (
          <div>
            <div>
              <ApolloConsumer>
                {(client) => (
                  <>
                    <form
                      style={{ position: 'relative' }}
                      action="POST"
                      onSubmit={(e) => {
                        e.preventDefault();
                        router.push({
                          pathname: '/search',
                          query: { term: value },
                        });
                      }}
                    >
                      <input
                        className="form-control form-control-sm mt-2"
                        {...getInputProps({
                          onChange: (e) => {
                            e.persist();
                            onChangeHandler(e, client);
                          },
                          type: 'text',
                          name: 'term',
                          placeholder: 'Search',
                        })}
                      />

                      <SearchIcon
                        style={{
                          position: 'absolute',
                          top: '5',
                          right: '5',
                        }}
                      />
                    </form>
                  </>
                )}
              </ApolloConsumer>
            </div>
            <div>
              {isOpen && (
                <ul
                  style={{
                    backgroundColor: '#eee',
                    listStyle: 'none',
                  }}
                  className="list-group list-group-flush"
                >
                  {SearchUsers && SearchUsers.length > 0
                    ? SearchUsers.map((item, i) => (
                        <li
                          {...getItemProps({ item })}
                          style={{
                            padding: '5px',
                            backgroundColor: '#eee',
                          }}
                          className={`d-flex list-group-item ${
                            highlightedIndex === i
                              ? 'bg-secondary text-white'
                              : 'non-selected'
                          }`}
                          key={item.id}
                        >
                          <img
                            className="rounded-circle mr-3"
                            width="40"
                            style={{ marginRight: '20px' }}
                            src={item.avatar}
                            alt={item.username}
                          />

                          <div className="media-body">
                            <h6 className="mt-0 mb-1">{item.username}</h6>

                            <small>Total Posts: {item.postCount}</small>
                          </div>
                        </li>
                      ))
                    : null}
                  {loading && <li>Searching Please Wait....</li>}
                  {SearchUsers && SearchUsers.length === 0 && !loading && (
                    <li>No Resust Found {inputValue}</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        )}
      </Downshift>
    </>
  );
};

export default SearchBar;
