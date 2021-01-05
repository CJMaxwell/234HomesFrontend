import React from 'react';
import Notifications from 'react-notify-toast';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { createUploadLink } from 'apollo-upload-client';
import { useCookies } from '../hooks/storage';
// import { useApollo } from '../lib/apolloClient';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/style.css';
import { theme } from '../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tippy.js/dist/tippy.css';

const errLink = onError(
  ({
    // networkError,
    graphQLErrors = [],
  }) => {
    const errorCodes = graphQLErrors.map((err) => err.extensions.code);
    if (errorCodes.includes('UNAUTHENTICATED')) {
      if (typeof window !== 'undefined') {
        Router.push('/login');
      } else {
        console.error(graphQLErrors);
      }
    }
  },
);

export default function App({ Component, pageProps }) {
  // const apolloClient = useApollo(pageProps.initialApolloState);
  const { data: token } = useCookies('Authorization', '');

  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    headers: {
      Authorization: token,
    },
    link: errLink.concat(
      createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_SERVER_URI}/graphql`,
      }),
    ),
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Notifications />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
