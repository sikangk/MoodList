import React,{useEffect} from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const isProduction = process.env.NODE_ENV === "production"


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {

    if (isProduction) {
      document.oncontextmenu = function () {
        return false;
      }
    }

  },[])


  return <Component {...pageProps} />
}

export default MyApp
