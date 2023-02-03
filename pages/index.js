import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Button } from '../components/Button/Button';
import { Partners } from '../components/Parceiros/Partners';
import { App } from './_app.js';
import Image from 'next/image';


function Home( ) {
    return (
        <>
            <Head>
                <title>Industrial Service</title>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header/>
        </>
    )
}

export default Home 