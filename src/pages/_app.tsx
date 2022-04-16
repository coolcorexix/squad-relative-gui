import "styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider, ResetCSS } from "ui-kit";
import { LanguageProvider } from "contexts/Localization";
import { Web3ReactProvider } from "@web3-react/core";
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
import useEagerConnect from "hooks/useEagerConnect";

const StyledThemeProvider = (props) => {
  const { resolvedTheme } = useNextTheme();
  console.log(
    "🚀 ~ file: _app.tsx ~ line 22 ~ StyledThemeProvider ~ resolvedTheme",
    resolvedTheme
  );
  return (
    <ThemeProvider theme={resolvedTheme === "dark" ? dark : light} {...props} />
  );
};

function GlobalHooks() {
  useEagerConnect();
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <LanguageProvider>
        <NextThemeProvider>
          <StyledThemeProvider>
            <ToastsProvider>
              <ModalProvider>
                <GlobalHooks />
                <GlobalStyle />
                <ResetCSS />
                {typeof window !== "undefined" && (
                  <AppMenu>
                    <Component {...pageProps} />
                  </AppMenu>
                )}
              </ModalProvider>
            </ToastsProvider>
          </StyledThemeProvider>
        </NextThemeProvider>
      </LanguageProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
