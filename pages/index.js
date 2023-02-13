import Head from 'next/head';
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Button from './components/Button/Button';
import Partners from './components/Parceiros/Partners';
import App from './_app.js';
import Image from 'next/image';



function Home( ) {
    return (
        <>
            <Head>
                <title>Industrial Service</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

                <script src="https://kit.fontawesome.com/e6204ec45c.js" crossorigin="anonymous"></script>
                
            </Head>

            <Header/>
            <Hero />
        </>
    )
}

export default Home 