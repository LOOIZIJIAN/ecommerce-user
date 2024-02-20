import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Head from "next/head"; // Import Head from next/head

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
        <link
          rel="icon"
          href="Screenshot 2023-09-11 152049-photoaidcom-cropped.png"
        />
      </Head>
      <GlobalStyles />
      <Toaster />
      <header>
        {/* Your logo and website name */}
        <img src="/your-logo.png" alt="Logo" />
        <h1>Your Website Name</h1>
      </header>
      <CartContextProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </CartContextProvider>
    </>
  );
}
