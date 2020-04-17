import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { customMedia } from '../../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useUser } from '../../utils/auth';
import {
  SearchIcon,
  HomeIcon,
  UserIcon,
  DirectionIcon,
  HeartIcon,
  CompassOutlineIcon,
} from '../../styles/Icons';

const NavbarStyles = styled.nav`
  display: flex;
  justify-content: space-around;

  .logo {
    margin-top: 12px;
    img {
      width: 115px;
    }
  }
  .search {
    margin-top: 12px;
    width: 213px;
    height: 82px;
    ${customMedia.lessThan('medium')`
    display:none;
  `}
  }
  .icons {
    margin-top: 12px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;

      li {
        margin-right: 20px;
        a {
          color: black;
        }
      }
    }
  }
`;

const Navbar = () => {
  const CurrentUser = useUser();

  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    router.push({
      pathname: '/search',
      query: { term: data.search },
    });
  };
  return (
    <NavbarStyles>
      <div className="logo">
        <img src="/img/logo.svg.webp" alt="Header logo" />
      </div>
      <div className="search">
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <InputGroup size="sm">
            <FormControl
              ref={register}
              name="search"
              placeholder="search"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="py-2 border-right-0 "
            />

            <InputGroup.Prepend>
              <InputGroup.Text className="bg-transparent">
                <SearchIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </form>
      </div>
      <div className="icons">
        <ul>
          <li>
            {CurrentUser ? (
              <Link href="/">
                <a>
                  <HomeIcon />
                </a>
              </Link>
            ) : (
              <Link href="/auth">
                <a>
                  <HomeIcon />
                </a>
              </Link>
            )}
          </li>
          <li>
            <Link href="/direct/inbox">
              <a>
                <DirectionIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>
                <CompassOutlineIcon />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/Heart">
              <a>
                <HeartIcon />
              </a>
            </Link>
          </li>
          <li>
            {CurrentUser ? (
              <Link href={`/profile/${CurrentUser.username}`}>
                <a>
                  <UserIcon />
                </a>
              </Link>
            ) : (
              <Link href="/auth">
                <a>
                  <UserIcon />
                </a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
