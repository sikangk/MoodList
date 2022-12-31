import React,{useEffect} from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const isProduction = process.env.REACT_APP_IS_PRODUCTION === 'y'


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
