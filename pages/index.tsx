import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './main'
import {prefix} from "../config/config";


const isProduction = process.env.NODE_ENV === "production"
const Home: NextPage = () => {

    if (isProduction) {
        console.log = () => { };
        console.error = () => { };
        console.debug = () => { };
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mood List</title>
        <meta name="description" content="당신의 감정에 맞는 음악을 감상해보세요." />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

        <Main/>



    </div>
  )
}

export default Home
