import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Partners } from '../components/Parceiros/Partners';
import { Company } from '../components/Empresa/Company';
import { Services } from '../components/Servicos/Services';
import { Projects } from '../components/Projetos/Projects';
import { Contact } from '../components/Contato/Contact';
import { Informations } from '../components/Informacoes/Informations';
import { Footer } from '../components/Footer/Footer';
import { Form } from '../components/Form/Form'; 
import { Button } from '../components/Button/Button';

function Home( ) {
    return (
        <body>
            <Header />
            <Hero />
            <Partners />
            <Company />
            <Services />
            <Projects />
            <Contact />
            <Form />
            <Informations />
            <Footer />
        </body>
    )
}

export default Home