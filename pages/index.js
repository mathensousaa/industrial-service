import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Partners from '../components/Parceiros/Partners';
import Company from '../components/Empresa/Company';
import Services from '../components/Servicos/Services'
import Contact from '../components/Contato/Contact'
import Footer from '../components/Footer/Footer'
import Informations from '../components/Informacoes/Informations';

export default function Home() {
    return (
        <>
            <Header/>
            <Hero />
            <Partners />
            <Company />
            <Services />
            <Contact />
            <Informations />
            <Footer />
        </>
    )
}