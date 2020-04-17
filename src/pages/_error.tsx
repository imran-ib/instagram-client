import React from 'react';
import { NextPage } from 'next';
import Styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';

const ErrorStyles = Styled.div`
 > *{

   width: 100Vw;
   height: 100vh;
   margin: 0 auto;
   color:red;
  }

`;

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return (
    <Layout>
      <ErrorStyles>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </ErrorStyles>
    </Layout>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode;

  return {
    statusCode,
    namespacesRequired: ['common'],
  };
};

export default ErrorPage;
