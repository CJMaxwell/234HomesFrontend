import { withApollo } from 'next-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';
import { createUploadLink } from 'apollo-upload-client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URI,
    headers: {
      Authorization: Cookies.get('accessToken'),
    },
  }),
});

export default withApollo(apolloClient);
