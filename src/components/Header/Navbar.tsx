import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useUser } from '../../utils/auth';
import {
  HomeIcon,
  UserIcon,
  DirectionIcon,
  HeartIcon,
  CompassOutlineIcon,
} from '../../styles/Icons';
import SearchBar from './SearchBar';

const NavbarStyles = styled.nav`
  display: flex;
  justify-content: space-around;

  .logo {
    margin-top: 12px;
    img {
      width: 115px;
    }
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

  return (
    <NavbarStyles>
      <div className="logo">
        <img src="/img/logo.svg.webp" alt="Header logo" />
      </div>
      <SearchBar />
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
