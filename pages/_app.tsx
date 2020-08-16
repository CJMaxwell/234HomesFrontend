import App from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/style.css";
import { theme } from "../styles/theme";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
