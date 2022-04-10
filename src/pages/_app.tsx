import "styles/globals.css";
import type { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Global";
import { dark, light } from "components/theme";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default MyApp;
