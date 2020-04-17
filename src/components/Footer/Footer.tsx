import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  .Footer-Container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
  }

  .link {
    margin-left: 18px;
    color: #00376b;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    position: relative;
    text-transform: uppercase;
    vertical-align: top;
  }
  .right {
    > .link {
      color: ${({ theme }) => theme.darkGreyColor};
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="Footer-Container">
        <div className="left">
          <Link href="/about">
            <a className="link">ABOUT</a>
          </Link>
          <Link href="/help">
            <a className="link">HELP</a>
          </Link>
          <Link href="/press">
            <a className="link">PRESS</a>
          </Link>
          <Link href="/api">
            <a className="link">API</a>
          </Link>
          <Link href="/jobs">
            <a className="link">JOBS</a>
          </Link>
          <Link href="/privacy">
            <a className="link">PRIVACY</a>
          </Link>
          <Link href="/terms">
            <a className="link">TERMS</a>
          </Link>
          <Link href="/locations">
            <a className="link">LOCATIONS</a>
          </Link>
          <Link href="/accounts">
            <a className="link">TOP ACCOUNTS</a>
          </Link>
          <Link href="/hashtags">
            <a className="link">HASHTAGS</a>
          </Link>
          <Link href="/language">
            <a className="link">LANGUAGE</a>
          </Link>
        </div>

        <div className="right">
          <Link href="#">
            <a className="link">© 2020 INSTAGRAM FROM FACEBOOK</a>
          </Link>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
