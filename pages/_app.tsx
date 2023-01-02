import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import About from "./about";
import { NextPage } from "next";
import { ReactElement } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  // return (
  //   <>
  //     <About />

  //   </>
  // );
  //     <NavBar />
  //     <NavBar />
  return getLayout(<Component {...pageProps} />);
}
