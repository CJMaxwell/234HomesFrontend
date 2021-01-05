import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import Router from 'next/router';
import Cookies from 'js-cookie';

let apolloClient;
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

const authMiddleware = new ApolloLink((operation, forward) => {
  console.log(Cookies.get('Authorization'), 'middleware');
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: Cookies.get('Authorization') || null,
    },
  }));

  return forward(operation);
});

const httpLink = errLink.concat(
  createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URI}/graphql`,
  }),
);

function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    // credentials: 'include',
    link: from([authMiddleware, httpLink]),
  });
}

export function initializeApollo(initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
