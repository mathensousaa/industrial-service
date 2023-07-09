import Head from 'next/head';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Parceiros/Partners';
import Company from './components/Empresa/Company';
import Services from './components/Servicos/Services'
import Contact from './components/Contato/Contact'
import Footer from './components/Footer/Footer'

export default function Home( ) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport" />
                <meta content="IE=Edge" http-equiv="X-UA-Compatible" />
                <meta http-equiv="x-dns-prefetch-control" content="on" />
                <meta name="referrer" content="no-referrer" />
                <meta name="description" content="A Industrial Service é uma empresa especializada em serviços de alpinismo e manutenção industrial e predial, com treinamentos de acesso por cordas. Atuando desde 2011, conta com equipe altamente qualificada, garantindo máxima segurança em seus serviços."/>
                <title>Alpinismo industrial e predial | Industrial Service</title>
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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
            </Head>
            <Header/>
            <Hero />
            <Partners />
            <Company />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}