import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body{
    background-color: #292827;  
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif; 
    overflow-x: hidden;
  }

`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>DIRECT Phone Accessory</title>
        <link rel="icon" href="2412853-modified.png"/>
      </Head>
      <GlobalStyles />
      <Toaster />
      <SessionProvider session={session}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
