import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
// import '@/styles/globals.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body{
    background-color: #292827;  
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif; 
  }
`;
export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <>
        <GlobalStyles/>
        <Toaster />
        <CartContextProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider> 
        </CartContextProvider>
    </>
  );
}
