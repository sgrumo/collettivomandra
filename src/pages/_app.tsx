import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/reset.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Collettivo Mandra"
        description="Collettivo Mandra spacca"
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
