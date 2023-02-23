import styles from './Partners.module.css';
import Image from 'next/image';
import angloAmericanLogo from '../../../public/partners/angloAmericanLogo.svg';
import VotorantimLogo from '../../../public/partners/votorantimLogo.svg';

export default function Partners() {
    return (
        <section className={styles.partners}>
            <h4><b>Empresas e colaboradores</b> que confiam na Industrial Service</h4>
            <div className={styles.logos}>
                <img src='partners/angloAmericanLogo.svg' alt='Anglo American'/>
                <img src='partners/votorantimLogo.svg' alt='Votorantim'/>
                <img src='partners/itafosLogo.svg' alt='Itafos'/>
                <img src='partners/fcLogo.svg' alt='FC Incorporadora'/>
                <img src='partners/lafargeLogo.svg' alt='Lafarge Holcim '/>
                <img src='partners/jallesLogo.svg' alt='Jalles Machado'/>
                <img src='partners/albiomaLogo.svg' alt='Albioma'/>
            </div>
        </section>
    )
}