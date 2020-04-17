import React from 'react';
import styled from 'styled-components';

const SpinnerStyles = styled.div`
  #overlay {
    background: #ffffff;
    color: #666666;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 5000;
    top: 0;
    left: 0;
    float: left;
    text-align: center;
    padding-top: 25%;
    opacity: 0.8;
  }

  .spinner {
    margin: 0 auto;
    height: 64px;
    width: 64px;
    animation: rotate 0.8s infinite linear;
    border: 5px solid firebrick;
    border-right-color: transparent;
    border-radius: 50%;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyles>
      <div id="overlay">
        <div className="spinner"></div>
        <br />
        Loading...
      </div>
    </SpinnerStyles>
  );
};

export default Spinner;
