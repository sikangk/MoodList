import React,{useEffect} from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {

    document.oncontextmenu = function() {
      return false;
    }

  },[])


  return <Component {...pageProps} />
}

export default MyApp
