import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import styled from 'styled-components';

const AccountStyles = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  width: 350px;
  height: auto;
  background-color: #fff;
  ${(props) => props.theme.whiteBox}
  margin-bottom:10px;
  .singnup-p {
    color: ${({ theme }) => theme.darkGreyColor};
    font-weight: 500;
    font-size: 17px;
  }

  .Logo {
    display: flex;
    justify-content: center;
    img {
      height: 81px;
      min-width: 180px;
    }
  }
`;

const SwitchBoxStyles = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  width: 350px;
  height: 70px;
  background-color: #fff;
  ${(props) => props.theme.whiteBox}

  > p {
    color: black;
    margin: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    font-size: 14px;

    > a {
      color: ${(props) => props.theme.blueColor};
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      font-weight: 400;

      &:hover {
        color: ${(props) => props.theme.blueColor};
      }
    }
  }
`;

function Account() {
  const [Action, setAction] = useState(false);
  return (
    <>
      <AccountStyles>
        <div className="Account-wrapper">
          <div className="Logo">
            <img src="/img/logo.svg.webp" alt="instagram logo" />
          </div>
          {Action ? (
            <div>
              <p className="lead text-center singnup-p">
                Sign up to see photos and videos from your friends.
              </p>

              <Signup Action={Action} setAction={setAction} />
            </div>
          ) : (
            <Login Action={Action} setAction={setAction} />
          )}
        </div>
      </AccountStyles>
      <SwitchBoxStyles>
        {Action ? (
          <p>
            Have an account? <a onClick={() => setAction(!Action)}> Log In </a>{' '}
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <a onClick={() => setAction(!Action)}> Sign up </a>
          </p>
        )}
      </SwitchBoxStyles>
    </>
  );
}

export default Account;
