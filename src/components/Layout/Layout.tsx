import React, { useState } from 'react';
import Header from '../Header/Header';
import Meta from 'next/head';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
        />
      </Meta>{' '}
      <Header /> {children} <Footer />
    </div>
  );
};
