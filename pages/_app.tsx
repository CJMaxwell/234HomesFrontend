import React from 'react';
import Notifications from 'react-notify-toast';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '../lib/apolloClient';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/style.css';
import { theme } from '../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tippy.js/dist/tippy.css';

export default function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Notifications />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
