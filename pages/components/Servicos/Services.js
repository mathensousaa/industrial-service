import Accordion from '../Accordion/Accordion';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.servicesContainer}>
                <div className={styles.servicesItens}>
                    <h2>Nossos Serviços</h2>
                    <p>Oferecemos soluções completas e personalizadas em segurança e manutenção industrial e predial</p>
                    <Accordion />
                </div>
                <div className={styles.servicesImage}>
                    <p>Image</p>
                </div>
            </div>
        </section>
    )
}