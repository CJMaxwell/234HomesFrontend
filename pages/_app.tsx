import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';
import { ThemeProvider } from 'styled-components';
import '../styles/style.css';
import { theme } from '../styles/theme';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
