import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/apollo/withData';
import nookies from 'nookies';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle, theme } from '../styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

class MyApp extends App {
  state = { Token: '' };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let Token = nookies.get(ctx);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;

    return { pageProps, Token };
  }

  render() {
    const { Component, pageProps, apollo, Token } = this.props;

    return (
      <>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer />
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
