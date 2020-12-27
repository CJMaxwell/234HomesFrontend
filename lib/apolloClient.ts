import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';
import { createUploadLink } from 'apollo-upload-client';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
      uri: `${process.env.NEXT_PUBLIC_SERVER_URI}/graphql`,
      headers: {
        Authorization: Cookies.get('accessToken'),
      },
    }),
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

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
