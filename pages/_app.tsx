import React from 'react';
import App from 'next/app';
import Notifications from 'react-notify-toast';
import { ThemeProvider } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/style.css';
import { theme } from '../styles/theme';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Notifications />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
