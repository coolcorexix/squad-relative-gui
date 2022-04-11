import "styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider, ResetCSS } from "ui-kit";
import { LanguageProvider } from "contexts/Localization";
import { Web3ReactProvider } from "@web3-react/core";
import { HelmetProvider } from "react-helmet-async";
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/Global";
import { dark, light } from "ui-kit/theme";
import { getLibrary } from "web3/getLibrary";
import React from "react";

import AppMenu from "components/Menu";
import { ToastsProvider } from "contexts/ToastsContext";

const StyledThemeProvider = (props) => {
  const { resolvedTheme } = useNextTheme();
  return (
    <ThemeProvider theme={resolvedTheme === "dark" ? dark : light} {...props} />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <LanguageProvider>
        <HelmetProvider>
          <NextThemeProvider>
            <StyledThemeProvider>
              <GlobalStyle />
              <ResetCSS />
              <ToastsProvider>
                <ModalProvider>
                  <AppMenu>
                    <Component {...pageProps} />
                  </AppMenu>
                </ModalProvider>
              </ToastsProvider>
            </StyledThemeProvider>
          </NextThemeProvider>
        </HelmetProvider>
      </LanguageProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
