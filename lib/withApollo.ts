import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URI,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
