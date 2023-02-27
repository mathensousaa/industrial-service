import styles from './Services.module.css';
import Icon from '../Icon/Icon';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


export default function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.servicesContainer}>
                <div className={styles.servicesCol}>
                    <h2>Nossos Serviços</h2>
                    <p>Ofereçemos soluções completas e personalizadas em segurança e manutenção industrial e predial</p>
                    <div className={styles.servicesList}>
                        <div className={styles.servicesItem}>
                            <Icon
                                size="40px"
                                bgColor="var(--white)"
                                icon={faCircleCheck}
                                iconSize="2x"
                                iconColor="var(--red-400)"

                            />
                            <h3>Acesso por cordas</h3>
                        </div>
                        <div className={styles.servicesItem}>
                            <h3>Resgate em altura e espaço confinado</h3>
                        </div>
                        <div className={styles.servicesItem}>
                            <h3>Treinamentos</h3>
                        </div>
                        <div className={styles.servicesItem}>
                            <h3>Manutenção predial</h3>
                        </div>
                        <div className={styles.servicesItem}>
                            <h3>Manutenção industrial</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesImage}>

                </div>
            </div>
        </section>
    )
}