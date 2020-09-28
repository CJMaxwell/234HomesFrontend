import React from 'react';
import App from 'next/app';
import Notifications from 'react-notify-toast';
import { ThemeProvider } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/style.css';
import { theme } from '../styles/theme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'tippy.js/dist/tippy.css';
import "@react-page/core/lib/index.css";
import "@react-page/ui/lib/index.css";
import "@react-page/plugins-slate/lib/index.css";
import "@react-page/plugins-background/lib/index.css";

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
