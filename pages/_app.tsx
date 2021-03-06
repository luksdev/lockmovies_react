import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/lib/theme";
import { AuthProvider } from "../src/contexts/AuthContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
