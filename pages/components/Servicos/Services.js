import AccordionIndustrial from '../Accordion/Accordion';
import styles from './Services.module.css';


export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.servicesContainer}>
                <div className={styles.servicesItens}>
                    <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
                    <p>Oferecemos soluções completas e personalizadas em segurança e manutenção industrial e predial</p>
                    <AccordionIndustrial />
                </div>
                <div className={styles.servicesImage}>
                    <p>Imagem</p>
                </div>
            </div>
        </section>
    )
}