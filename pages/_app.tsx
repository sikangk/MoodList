import React, {useEffect} from "react";
import type {AppProps} from 'next/app'
import {GlobalsStyle} from "../styles/globals.style";

const isProduction = process.env.NODE_ENV === "production"


function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {

        if (isProduction) {
            document.oncontextmenu = function () {
                return false;
            }
        }

    }, [])


    return (
        <div>
            <GlobalsStyle/>
            <Component {...pageProps} />
        </div>)
}

export default MyApp
