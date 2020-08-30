import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Cookies from 'js-cookie';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: Cookies.get('accessToken'),
  },
});

export default withApollo(apolloClient);
